import type { Metadata } from 'next';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import PrintButton from '@/components/Resume/PrintButton';
import ResumeNav from '@/components/Resume/ResumeNav';
import RunningHead from '@/components/Resume/RunningHead';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import contact, { type ContactId } from '@/data/contact';
import profile from '@/data/profile.json';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { careerSpanYears } from '@/lib/career';
import { createPageMetadata } from '@/lib/metadata';
import { RESUME_JSON_PATH, RESUME_JSON_URL } from '@/lib/resumeJson';
import { smartQuotes } from '@/lib/typography';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

const resumeMetadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s resume. Software engineering, Ruby on Rails, AWS, Linux, and cloud infrastructure.`,
  path: '/resume/',
});

export const metadata: Metadata = {
  ...resumeMetadata,
  // The visible chip serves readers; the alternate lets tools discover the
  // machine-readable document without scraping page copy. Keep the canonical
  // that createPageMetadata already supplied when adding the new type.
  alternates: {
    ...resumeMetadata.alternates,
    types: {
      'application/json': RESUME_JSON_URL,
    },
  },
};

/** A URL as it should read on paper: no protocol, no `www.`, no trailing slash. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(?:www\.)?/, '').replace(/\/$/, '');
}

/**
 * Looks a destination up by its stable data key rather than its display label,
 * so copy edits cannot break the printed header. Throws rather than falling
 * back, because a silently empty `href` on a printed resume is worse than a
 * failed build.
 */
function contactLink(id: ContactId): string {
  const item = contact.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`No "${id}" entry in src/data/contact.ts`);
  }
  return item.link;
}

export default function ResumePage() {
  // One read, shared by the headline span and every tenure; baked at build time.
  const now = Date.now();
  const careerSpan = careerSpanYears(work, now);
  const github = contactLink('github');
  const linkedin = contactLink('linkedin');

  return (
    <PageWrapper>
      <section className="resume-page">
        <RunningHead name={smartQuotes(profile.name)} />
        <header className="resume-header">
          <div className="resume-header-row">
            {/* Paper hides the header and footer that carry the name, so
                there the title is the name. */}
            <h1 className="page-title">
              <span className="resume-screen-title">Resume</span>{' '}
              <span className="resume-print-name">
                {smartQuotes(profile.name)}
              </span>
            </h1>
            <div className="resume-actions">
              <PrintButton />
              {/* Document-relative on purpose: /resume/ may live below a
                  repository base path, while a root-relative href would escape
                  it. ../resume.json resolves correctly in both deployments. */}
              <a
                href={`..${RESUME_JSON_PATH}`}
                className="button button-secondary button-compact"
                title="JSON Resume"
                aria-label="JSON Resume"
              >
                JSON
              </a>
            </div>
          </div>
          <p className="resume-summary">
            Software engineer with a career spanning {careerSpan}+ years across
            full-stack development, Ruby on Rails, AWS, Linux, containers, and
            cloud infrastructure. I develop and maintain production systems and
            currently study at Hanyang University in Seoul. AWS Certified Cloud
            Practitioner; 3rd place in the MUST Programming Olympiad; bronze
            medal in the XIV Mongolian National Programming Olympiad team.
          </p>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable and linkable. Destinations come from shared contact
              data, while the location comes from the shared profile. */}
          <address className="resume-print-contact">
            <span>{profile.currentCity}</span>
            <a href={`${SITE_URL}/`}>{displayUrl(SITE_URL)}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={github}>{displayUrl(github)}</a>
            <a href={linkedin}>{displayUrl(linkedin)}</a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} now={now} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
