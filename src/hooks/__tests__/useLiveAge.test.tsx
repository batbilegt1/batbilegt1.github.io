import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import useLiveAge from '../useLiveAge';

const INITIAL = '36.42';

let renders = 0;

function Subject() {
  renders += 1;
  const { live, ref } = useLiveAge<HTMLSpanElement>(8, INITIAL);

  return (
    <span data-live={live} data-testid="live-age" ref={ref}>
      {INITIAL}
    </span>
  );
}

const age = () => screen.getByTestId('live-age');

function setHidden(hidden: boolean) {
  Object.defineProperty(document, 'hidden', {
    configurable: true,
    value: hidden,
  });
  fireEvent(document, new Event('visibilitychange'));
}

// Reduced motion keeps the snapshot too, and `LiveAge.test.tsx` covers that.
describe('useLiveAge', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    window.matchMedia = (() => ({
      matches: false,
    })) as unknown as typeof matchMedia;
    setHidden(false);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('keeps the snapshot when no birth date is published', () => {
    render(<Subject />);

    expect(age()).toHaveTextContent('36.42');
    expect(age()).toHaveAttribute('data-live', 'false');
  });

  it('does not start a timer while hidden or when restored', () => {
    render(<Subject />);

    setHidden(true);
    expect(age()).toHaveTextContent(INITIAL);
    expect(age()).toHaveAttribute('data-live', 'false');

    setHidden(false);
    expect(age()).toHaveTextContent(INITIAL);
    expect(age()).toHaveAttribute('data-live', 'false');
  });

  // At full precision the timer reaches 40 ticks a second, so routing the value
  // through state would cost as many renders.
  it('does not advance or rerender without a birth date', () => {
    render(<Subject />);
    const rendersAfterMount = renders;
    const firstReading = age().textContent;

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(age().textContent).toBe(firstReading);
    expect(renders).toBe(rendersAfterMount);
  });
});
