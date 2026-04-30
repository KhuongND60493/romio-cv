import type { SocialLink } from '@/types/cv'
import { ThemeToggle } from '@/components/theme-toggle/ThemeToggle'
import { LangToggle } from '@/components/lang-toggle/LangToggle'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useEffect, useMemo, useRef, useState } from 'react'
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
}: HeaderProps) => {
  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.href.replace('#', '')),
    [navigationItems],
  )
  const activeId = useScrollSpy(sectionIds, 150)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current) {
        return
      }

      const target = event.target
      if (target instanceof Node && !headerRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <a
          className={styles.logo}
          href="#hero"
          aria-label="Go to hero section"
        >
          ROMIO<span>_NGUYEN</span>
        </a>

        <nav
          id="primary-mobile-menu"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-active={activeId === item.href.replace('#', '')}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
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
          <button
            type="button"
            className={styles.mobileMenuBtn}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

