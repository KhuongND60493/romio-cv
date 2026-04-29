import clsx from 'clsx'
import styles from './TagList.module.css'

interface TagListProps {
  items: string[]
  compact?: boolean
}

export const TagList = ({ items, compact = false }: TagListProps) => (
  <ul className={clsx(styles.list, compact && styles.compact)}>
    {items.map((item) => (
      <li key={item} className={styles.tag}>
        {item}
      </li>
    ))}
  </ul>
)

