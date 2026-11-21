import { describe, expect, it } from 'vitest';

import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import work from '@/data/resume/work';

describe('resume link data', () => {
  it('gives every published company, school, and course a lasting absolute URL', () => {
    for (const link of [
      ...work
        .map((job) => job.url)
        .filter((link): link is string => Boolean(link)),
      ...degrees.map((degree) => degree.link),
      ...courses.map((course) => course.link),
    ]) {
      const url = new URL(link);

      expect(['http:', 'https:']).toContain(url.protocol);
      expect(url.hostname).not.toBe('');
      expect(link.toLowerCase()).not.toContain('jsessionid');
    }
  });
});
