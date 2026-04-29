import { ContactForm } from '../../components/contact-form/ContactForm'
import { SectionHeading } from '../../components/section-heading/SectionHeading'
import type { Profile } from '../../types/cv'
import { useTranslation } from 'react-i18next'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  profile: Profile
}

export const ContactSection = ({ profile }: ContactSectionProps) => {
  const { t } = useTranslation()
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.info}>
        <SectionHeading
          eyebrow={t('sections.contact')}
          title="Let’s design and ship reliable products together."
          description="Open to architecture discussions, consulting opportunities, and senior fullstack engagements."
        />

        <div className={styles.card}>
          {[...profile.links, ...profile.socialLinks].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.ariaLabel}
              className={styles.linkRow}
            >
              <span>{item.label}</span>
              <strong>
                {'value' in item
                  ? String(item.value)
                  : item.href.replace(/^https?:\/\//, '')}
              </strong>
            </a>
          ))}
        </div>
      </div>

      <ContactForm />
    </section>
  )
}
