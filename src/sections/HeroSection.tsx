import type { Profile } from '../types/cv'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  profile: Profile
}

export const HeroSection = ({ profile }: HeroSectionProps) => (
  <section id="hero" className={styles.hero}>
    <div className={styles.copy}>
      <p className={styles.kicker}>Technical Architect Portfolio</p>
      <h1>{profile.hero.fullName}</h1>
      <p className={styles.title}>{profile.hero.title}</p>
      <p className={styles.tagline}>{profile.hero.tagline}</p>
      <p className={styles.summary}>{profile.hero.summary}</p>

      <div className={styles.ctaGroup}>
        {profile.ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className={styles[cta.variant]}
            download={cta.label === 'Download CV'}
          >
            {cta.label}
          </a>
        ))}
      </div>

      <ul className={styles.contactList}>
        {profile.links.map((link) => (
          <li key={link.label}>
            <span>{link.label}</span>
            <a href={link.href} aria-label={link.ariaLabel}>
              {link.value}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className={styles.panel}>
      <div className={styles.avatar} aria-hidden="true">
        {profile.hero.avatarLabel}
      </div>

      <div className={styles.highlightCard}>
        <p>Architecture Focus</p>
        <strong>Cloud-native delivery, resilient APIs, performance-first systems.</strong>
      </div>

      <div className={styles.metrics}>
        <article>
          <strong>10+</strong>
          <span>Years across fullstack delivery</span>
        </article>
        <article>
          <strong>4</strong>
          <span>Core domains: FE, BE, Mobile, DevOps</span>
        </article>
        <article>
          <strong>24/7</strong>
          <span>Reliability mindset for critical products</span>
        </article>
      </div>
    </div>
  </section>
)
