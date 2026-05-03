import { SectionHeading } from '@/shared/components/section-heading/SectionHeading'
import { TagList } from '@/shared/components/tag-list/TagList'
import type { SkillCategory } from '@/features/data/types.ts'
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
        title={t('techStack.title')}
        description={t('techStack.description')}
      />

      <div className={styles.grid}>
        {techStack.map((group) => (
          <article key={group.category} className={styles.card}>
            <h3>{group.category}</h3>
            <TagList items={group.items} compact iconOnly />
          </article>
        ))}
      </div>
    </section>
  )
}

