import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
  fullWidthDescription?: boolean
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  fullWidthDescription = true,
}: SectionHeadingProps) => (
  <div className={styles.heading}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2>{title}</h2>
    <p className={`${styles.description} ${fullWidthDescription ? styles.descriptionFullWidth : ''}`}>
      {description}
    </p>
  </div>
)

