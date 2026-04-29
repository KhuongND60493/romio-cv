import { useTranslation } from 'react-i18next'
import styles from './FooterSection.module.css'

interface FooterSectionProps {
  navigationItems: Array<{ label: string; href: string }>
}

export const FooterSection = ({ navigationItems }: FooterSectionProps) => {
  const { t } = useTranslation()
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Romio Nguyen</strong>
        <p>{t('footer.builtWith')}</p>
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

      <p className={styles.copy}>{t('footer.rights')}</p>
    </footer>
  )
}
