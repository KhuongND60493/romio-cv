import { SectionHeading } from '@/components/section-heading/SectionHeading'
import { TagList } from '@/components/tag-list/TagList'
import type { SkillCategory } from '@/types/cv'
import { useTranslation } from 'react-i18next'
import styles from './TechStackSection.module.css'

interface TechStackSectionProps {
  techStack: SkillCategory[]
}

export const TechStackSection = ({ techStack }: TechStackSectionProps) => {
  const { t } = useTranslation()
  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow={t('sections.techStack')}
        title="Tools and platforms used to deliver modern digital systems."
        description="Grouped by discipline to reflect breadth across backend, frontend, mobile, infrastructure, and operations."
      />

      <div className={styles.grid}>
        {techStack.map((group) => (
          <article key={group.category} className={styles.card}>
            <h3>{group.category}</h3>
            <TagList items={group.items} compact />
          </article>
        ))}
      </div>
    </section>
  )
}
