import styles from './SectionHeading.module.css'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => (
  <div className={styles.heading}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2>{title}</h2>
    <p className={styles.description}>{description}</p>
  </div>
)

