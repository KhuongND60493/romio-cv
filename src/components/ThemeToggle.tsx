import styles from './ThemeToggle.module.css'

interface ThemeToggleProps {
  theme: 'dark' | 'light'
  onToggle: () => void
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    className={styles.toggle}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  >
    <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
  </button>
)
