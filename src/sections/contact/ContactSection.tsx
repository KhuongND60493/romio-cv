import { ContactForm } from '@/shared/components/contact-form/ContactForm'
import { SectionHeading } from '@/shared/components/section-heading/SectionHeading'
import type { Profile } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  profile: Profile
}

export const ContactSection = ({ profile }: ContactSectionProps) => {
  const { t } = useTranslation()
  return (
    <section id="contact" className={styles.section}>
      <SectionHeading
        eyebrow={t('sections.contact')}
        title={t('contact.title')}
        description={t('contact.description')}
      />
      <div className={styles.content}>
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
        <ContactForm />
      </div>
    </section>
  )
}

