import type { SocialLink } from '../types/cv'
import { ThemeToggle } from './ThemeToggle'
import styles from './Header.module.css'

interface HeaderProps {
  navigationItems: Array<{ label: string; href: string }>
  socialLinks: SocialLink[]
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export const Header = ({
  navigationItems,
  socialLinks,
  theme,
  onToggleTheme,
}: HeaderProps) => (
  <header className={styles.header}>
    <div className={styles.inner}>
      <a className={styles.brand} href="#hero" aria-label="Go to hero section">
        <span className={styles.brandMark}>RN</span>
        <span className={styles.brandText}>
          <strong>Romio Nguyen</strong>
          <span>Technical Architect</span>
        </span>
      </a>

      <nav aria-label="Primary">
        <ul className={styles.navList}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>
    </div>
  </header>
)
