import clsx from 'clsx'
import type { ComponentType } from 'react'
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaMicrosoft,
  FaMobileScreen,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaUnity,
  FaVuejs,
} from 'react-icons/fa6'
import {
  SiApachekafka,
  SiDotnet,
  SiElectron,
  SiGo,
  SiGrafana,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPrometheus,
  SiRabbitmq,
  SiRedis,
  SiSpringboot,
  SiSwagger,
  SiTypescript,
} from 'react-icons/si'
import styles from './TagList.module.css'

interface TagListProps {
  items: string[]
  compact?: boolean
  iconOnly?: boolean
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[().,+/-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const iconByKeyword: Array<{ keyword: string; Icon: ComponentType<{ className?: string }> }> = [
  { keyword: 'react native', Icon: FaReact },
  { keyword: 'react', Icon: FaReact },
  { keyword: 'vue', Icon: FaVuejs },
  { keyword: 'angular', Icon: FaAngular },
  { keyword: 'node', Icon: FaNodeJs },
  { keyword: 'dotnet', Icon: SiDotnet },
  { keyword: 'asp net', Icon: SiDotnet },
  { keyword: 'java', Icon: FaJava },
  { keyword: 'spring boot', Icon: SiSpringboot },
  { keyword: 'php', Icon: FaPhp },
  { keyword: 'laravel', Icon: SiLaravel },
  { keyword: 'golang', Icon: SiGo },
  { keyword: 'go ', Icon: SiGo },
  { keyword: 'typescript', Icon: SiTypescript },
  { keyword: 'javascript', Icon: FaJs },
  { keyword: 'html', Icon: FaHtml5 },
  { keyword: 'css', Icon: FaCss3Alt },
  { keyword: 'mysql', Icon: SiMysql },
  { keyword: 'postgresql', Icon: SiPostgresql },
  { keyword: 'sql server', Icon: FaDatabase },
  { keyword: 'sqlite', Icon: FaDatabase },
  { keyword: 'mongodb', Icon: SiMongodb },
  { keyword: 'redis', Icon: SiRedis },
  { keyword: 'kafka', Icon: SiApachekafka },
  { keyword: 'rabbitmq', Icon: SiRabbitmq },
  { keyword: 'grafana', Icon: SiGrafana },
  { keyword: 'prometheus', Icon: SiPrometheus },
  { keyword: 'git', Icon: FaGitAlt },
  { keyword: 'jira', Icon: SiJira },
  { keyword: 'postman', Icon: SiPostman },
  { keyword: 'swagger', Icon: SiSwagger },
  { keyword: 'figma', Icon: FaFigma },
  { keyword: 'xd', Icon: FaUnity },
  { keyword: 'android', Icon: FaMobileScreen },
  { keyword: 'ios', Icon: FaMobileScreen },
  { keyword: 'electron', Icon: SiElectron },
  { keyword: 'linux', Icon: FaLinux },
  { keyword: 'azure', Icon: FaMicrosoft },
  { keyword: 'aws', Icon: FaAws },
  { keyword: 'microsoft', Icon: FaMicrosoft },
  { keyword: 'ms sql', Icon: FaDatabase },
]

const resolveIcon = (item: string) => {
  const normalized = ` ${normalize(item)} `
  const found = iconByKeyword.find(({ keyword }) => normalized.includes(` ${keyword} `))
  return found?.Icon ?? FaDatabase
}

export const TagList = ({ items, compact = false, iconOnly = false }: TagListProps) => (
  <ul className={clsx(styles.list, compact && styles.compact)}>
    {items.map((item) => (
      <li
        key={item}
        className={clsx(styles.tag, iconOnly && styles.iconTag)}
        data-tooltip={iconOnly ? item : undefined}
        aria-label={item}
      >
        {iconOnly ? (() => {
          const Icon = resolveIcon(item)
          return <Icon className={styles.techIcon} />
        })() : item}
      </li>
    ))}
  </ul>
)

