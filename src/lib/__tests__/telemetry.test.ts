import { describe, expect, it } from 'vitest';

import {
  AGE_MIN_INTERVAL,
  AGE_PRECISION_FULL,
  ageAt,
  ageIntervalFor,
  utcDate,
} from '../telemetry';

const COMPACT_PRECISION = 8;

describe('ageAt', () => {
  it('does not fabricate an age without a birth date', () => {
    expect(ageAt(Date.UTC(2026, 0, 1), 0)).toBe('unavailable');
  });
});

describe('ageIntervalFor', () => {
  it('matches the cadence to the displayed precision', () => {
    expect(ageIntervalFor(COMPACT_PRECISION)).toBeGreaterThan(300);
    expect(ageIntervalFor(COMPACT_PRECISION)).toBeLessThan(320);
  });

  it('never schedules faster than the minimum interval', () => {
    expect(ageIntervalFor(AGE_PRECISION_FULL)).toBe(AGE_MIN_INTERVAL);
  });
});

describe('utcDate', () => {
  it('does not depend on the build host timezone', () => {
    expect(utcDate(Date.UTC(2026, 6, 29, 0, 1))).toBe('2026-07-29');
  });
});
