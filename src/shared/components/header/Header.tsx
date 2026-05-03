import type { SocialLink } from '@/features/data/types.ts'
import { ThemeToggle } from '@/shared/components/theme-toggle/ThemeToggle'
import { LangToggle } from '@/shared/components/lang-toggle/LangToggle'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedinIn, FaGlobe } from 'react-icons/fa'
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
  const getSocialIcon = (link: SocialLink) => {
    const href = link.href.toLowerCase()
    if (href.includes('github.com')) {
      return <FaGithub aria-hidden="true" focusable="false" />
    }
    if (href.includes('linkedin.com')) {
      return <FaLinkedinIn aria-hidden="true" focusable="false" />
    }
    return <FaGlobe aria-hidden="true" focusable="false" />
  }

  const { t } = useTranslation()
  const sectionIds = useMemo(
    () => navigationItems.map((item) => item.href.replace('#', '')),
    [navigationItems],
  )
  const activeId = useScrollSpy(sectionIds, 150)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCvPopoverOpen, setIsCvPopoverOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current) {
        return
      }

      const target = event.target
      if (target instanceof Node && !headerRef.current.contains(target)) {
        setIsMenuOpen(false)
        setIsCvPopoverOpen(false)
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
    setIsCvPopoverOpen(false)
  }

  const openCvDownloadPicker = () => {
    window.dispatchEvent(new CustomEvent('open-cv-modal'))
    setIsCvPopoverOpen(false)
    setIsMenuOpen(false)
  }

  const openCvViewer = () => {
    window.dispatchEvent(new CustomEvent('open-cv-viewer'))
    setIsCvPopoverOpen(false)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const nextId = activeId || (window.scrollY < 120 ? 'hero' : '')
    if (!nextId) {
      return
    }

    const nextHash = `#${nextId}`
    if (window.location.hash === nextHash) {
      return
    }

    const nextUrl = `${window.location.pathname}${window.location.search}${nextHash}`
    window.history.replaceState(null, '', nextUrl)
  }, [activeId])

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
          <div className={styles.cvMenu}>
            <button
              type="button"
              className={styles.cvMenuTrigger}
              onClick={() => setIsCvPopoverOpen((prev) => !prev)}
              aria-expanded={isCvPopoverOpen}
              aria-haspopup="menu"
              aria-controls="cv-popover-menu"
            >
              {t('nav.cv')}
            </button>
            {isCvPopoverOpen && (
              <div id="cv-popover-menu" className={styles.cvPopover} role="menu">
                <button type="button" role="menuitem" onClick={openCvDownloadPicker}>
                  {t('hero.downloadCv')}
                </button>
                <button type="button" role="menuitem" onClick={openCvViewer}>
                  {t('hero.viewCv')}
                </button>
              </div>
            )}
          </div>
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
                title={link.ariaLabel}
              >
                {getSocialIcon(link)}
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


