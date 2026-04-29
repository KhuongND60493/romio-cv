import type { SocialLink } from '../types/cv'
import { ThemeToggle } from './ThemeToggle'
import { LangToggle } from './LangToggle'
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
    <div className={styles.container}>
      <a className={styles.logo} href="#hero" aria-label="Go to hero section">
        ROMIO<span>_NGUYEN</span>
      </a>

      <nav className={styles.nav} aria-label="Primary">
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className={styles.actions}>
        <div className={styles.social}>
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
        <LangToggle />
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button className={styles.mobileMenuBtn} aria-label="Menu">
          ☰
        </button>
      </div>
    </div>
  </header>
)
