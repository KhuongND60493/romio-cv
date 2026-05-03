import { SectionHeading } from '@/shared/components/section-heading/SectionHeading'
import type { Competency } from '@/features/data/types.ts'
import type { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaArrowsToCircle,
  FaChartLine,
  FaCodeBranch,
  FaDatabase,
  FaGaugeHigh,
  FaLayerGroup,
  FaMobileScreen,
  FaNetworkWired,
  FaPeopleGroup,
  FaPuzzlePiece,
  FaScrewdriverWrench,
  FaServer,
} from 'react-icons/fa6'
import styles from './CompetenciesSection.module.css'

interface CompetenciesSectionProps {
  competencies: Competency[]
}

const competencyIconMap: Record<string, ComponentType<{ className?: string }>> = {
  layer: FaLayerGroup,
  server: FaServer,
  code: FaCodeBranch,
  mobile: FaMobileScreen,
  database: FaDatabase,
  network: FaNetworkWired,
  modernize: FaScrewdriverWrench,
  performance: FaGaugeHigh,
  monitor: FaChartLine,
  leadership: FaPeopleGroup,
  delivery: FaArrowsToCircle,
  data: FaPuzzlePiece,
}

export const CompetenciesSection = ({
  competencies,
}: CompetenciesSectionProps) => {
  const { t } = useTranslation();
  return (
  <section id="skills" className={styles.section}>
    <SectionHeading
      eyebrow={t('sections.competencies')}
      title={t('skills.competenciesTitle')}
      description={t('skills.competenciesDescription')}
    />

    <div className={styles.grid}>
      {competencies.map((item) => {
        const Icon = competencyIconMap[item.icon] ?? FaPuzzlePiece
        return (
          <article key={item.title} className={styles.card} data-cursor="interactive">
            <span className={styles.iconWrapper} aria-hidden="true">
              <Icon className={styles.icon} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        )
      })}
    </div>
  </section>
)
}

