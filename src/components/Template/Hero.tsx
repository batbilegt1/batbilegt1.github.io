import Link from 'next/link';

import profile from '@/data/profile.json';
import { smartQuotes } from '@/lib/typography';

import Portrait from './Portrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Software engineering</p>
          <h1 className="hero-title">
            <span className="hero-name">{smartQuotes(profile.name)}</span>
          </h1>
          <p className="hero-tagline">
            I’m a {profile.role} at{' '}
            <a href="https://www.hanyang.ac.kr/" className="hero-highlight">
              {profile.employer}
            </a>
            , studying in Seoul, South Korea.
          </p>

          <p className="hero-summary">
            Software engineer experienced in full-stack development, Ruby on
            Rails, AWS, Linux, containers, and production cloud operations.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View resume
            </Link>
          </div>
        </div>

        <figure className="hero-portrait">
          <Portrait width={320} height={320} priority />
          <figcaption>{profile.currentCity}</figcaption>
        </figure>
      </div>
    </section>
  );
}
