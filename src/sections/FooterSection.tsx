import styles from './FooterSection.module.css'

interface FooterSectionProps {
  navigationItems: Array<{ label: string; href: string }>
}

export const FooterSection = ({ navigationItems }: FooterSectionProps) => (
  <footer className={styles.footer}>
    <div>
      <strong>Romio Nguyen</strong>
      <p>Built with React, TypeScript, and Vite for GitHub Pages deployment.</p>
    </div>

    <nav aria-label="Footer">
      <ul>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>

    <p className={styles.copy}>© 2026 Romio Nguyen. All rights reserved.</p>
  </footer>
)
