import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const publicDir = path.join(projectRoot, 'public')
const dataDir = path.join(projectRoot, 'src', 'data')

const escapeLatex = (value) =>
  String(value)
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/&/g, '\\&')
    .replace(/%/g, '\\%')
    .replace(/\$/g, '\\$')
    .replace(/#/g, '\\#')
    .replace(/_/g, '\\_')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/\^/g, '\\textasciicircum{}')

const readJson = async (filePath) => {
  const content = await readFile(filePath, 'utf-8')
  return JSON.parse(content)
}

const loadLocalizedPortfolio = async (lang) => {
  const profile = await readJson(path.join(dataDir, lang, 'profile.json'))
  const experiences = await readJson(path.join(dataDir, lang, 'experiences.json'))
  const projects = await readJson(path.join(dataDir, lang, 'projects.json'))
  const education = await readJson(path.join(dataDir, lang, 'education.json'))
  const certifications = await readJson(
    path.join(dataDir, lang, 'certifications.json'),
  )
  const skills = await readJson(path.join(dataDir, lang, 'skills.json'))
  const baseProfile = await readJson(path.join(dataDir, 'common', 'base_profile.json'))
  const baseSkills = await readJson(path.join(dataDir, 'common', 'base_skills.json'))

  return {
    profile: {
      ...profile,
      links: profile.links ?? baseProfile.links,
      socialLinks: profile.socialLinks ?? baseProfile.socialLinks,
    },
    experiences,
    projects,
    education,
    certifications,
    competencies: skills.competencies,
    techStack: skills.techStack ?? baseSkills.techStack,
  }
}

const sectionLabel = (lang, key) => {
  const map = {
    en: {
      education: 'Education',
      certifications: 'Certifications',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Technical Skills',
    },
    vi: {
      education: 'Hoc van',
      certifications: 'Chung chi',
      experience: 'Kinh nghiem',
      projects: 'Du an',
      skills: 'Ky nang ky thuat',
    },
  }

  return map[lang][key]
}

const buildResumeBody = (lang, data) => {
  const hero = data.profile.hero
  const contacts = [
    hero.phone,
    hero.email,
    ...(data.profile.socialLinks || []).map((item) => item.href.replace('https://', '')),
  ]

  const educationBlocks = data.education
    .map(
      (item) => `    \\resumeSubheading
      {${escapeLatex(item.degree)}}{${escapeLatex(item.duration ?? '')}}
      {${escapeLatex(item.institution)}}{}
      \\resumeItemListStart
        \\resumeItem{${escapeLatex(item.note)}}
      \\resumeItemListEnd`,
    )
    .join('\n\n')

  const certificationBlocks = data.certifications
    .map((item) => `\\resumeItem{${escapeLatex(item.name)} - ${escapeLatex(item.issuer)} (${escapeLatex(item.year)})}`)
    .join('\n        ')

  const experienceBlocks = data.experiences
    .map((item) => {
      const bullets = [...item.responsibilities, ...item.achievements]
        .slice(0, 6)
        .map((line) => `\\resumeItem{${escapeLatex(line)}}`)
        .join('\n        ')

      return `    \\resumeSubheading
      {${escapeLatex(item.role)}}{${escapeLatex(item.duration)}}
      {${escapeLatex(item.company)}}{${escapeLatex(item.location)}}
      \\resumeItemListStart
        ${bullets}
      \\resumeItemListEnd`
    })
    .join('\n\n')

  const projectBlocks = data.projects
    .slice(0, 6)
    .map((item) => {
      const arch = item.architectureHighlights
        .slice(0, 3)
        .map((line) => `\\resumeItem{${escapeLatex(line)}}`)
        .join('\n            ')

      return `      \\resumeProjectHeading
          {\\textbf{${escapeLatex(item.name)}} $|$ \\emph{${escapeLatex(item.role)}}}{}
          \\resumeItemListStart
            \\resumeItem{${escapeLatex(item.description)}}
            ${arch}
            \\resumeItem{${escapeLatex(item.businessImpact)}}
          \\resumeItemListEnd`
    })
    .join('\n')

  const skillsLines = data.techStack
    .slice(0, 6)
    .map((group) => `\\textbf{${escapeLatex(group.category)}}{: ${escapeLatex(group.items.join(', '))}}`)
    .join(' \\\\\n     ')

  return `
\\begin{document}

\\begin{center}
    \\textbf{\\Huge \\scshape ${escapeLatex(hero.fullName)}} \\\\ \\vspace{1pt}
    \\small ${contacts.map((text) => escapeLatex(text)).join(' $|$ ')}
\\end{center}

\\section{${sectionLabel(lang, 'education')}}
  \\resumeSubHeadingListStart
${educationBlocks}
  \\resumeSubHeadingListEnd

\\section{${sectionLabel(lang, 'certifications')}}
\\begin{itemize}[leftmargin=0.15in, label={}]
  \\small{\\item{
        ${certificationBlocks}
  }}
\\end{itemize}

\\section{${sectionLabel(lang, 'experience')}}
  \\resumeSubHeadingListStart
${experienceBlocks}
  \\resumeSubHeadingListEnd

\\section{${sectionLabel(lang, 'projects')}}
    \\resumeSubHeadingListStart
${projectBlocks}
    \\resumeSubHeadingListEnd

\\section{${sectionLabel(lang, 'skills')}}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     ${skillsLines}
    }}
 \\end{itemize}

\\end{document}
`
}

const resolveTemplatePreamble = async () => {
  const templatePath = path.join(publicDir, 'resume.tex')
  const content = await readFile(templatePath, 'utf-8')
  const splitIndex = content.indexOf('\\begin{document}')
  return splitIndex > -1 ? content.slice(0, splitIndex).trimEnd() : content.trimEnd()
}

const hasCommand = (cmd) => {
  const result = spawnSync('sh', ['-lc', `command -v ${cmd}`], {
    stdio: 'ignore',
  })
  return result.status === 0
}

const compileTexToPdf = (texPath) => {
  const compiler = hasCommand('xelatex')
    ? 'xelatex'
    : hasCommand('pdflatex')
      ? 'pdflatex'
      : null

  if (!compiler) {
    return false
  }

  const fileName = path.basename(texPath)
  const cwd = path.dirname(texPath)
  const command = `${compiler} -interaction=nonstopmode -halt-on-error "${fileName}"`
  const run = spawnSync('sh', ['-lc', command], { cwd, stdio: 'inherit' })
  return run.status === 0
}

const exportForLanguage = async (lang, preamble) => {
  const data = await loadLocalizedPortfolio(lang)
  const texFileName = `[${lang}]_nguyen_duy_khuong_cv.tex`
  const texPath = path.join(publicDir, texFileName)
  const texContent = `${preamble}\n${buildResumeBody(lang, data)}`

  await writeFile(texPath, texContent, 'utf-8')
  return compileTexToPdf(texPath)
}

const main = async () => {
  await mkdir(publicDir, { recursive: true })
  const preamble = await resolveTemplatePreamble()

  const enCompiled = await exportForLanguage('en', preamble)
  const viCompiled = await exportForLanguage('vi', preamble)

  if (!enCompiled || !viCompiled) {
    console.warn(
      '\nLaTeX compiler not found (or compilation failed). Generated .tex files are ready in public/.',
    )
    console.warn('Please install MacTeX/BasicTeX, then run: npm run export:cv\n')
  }
}

main().catch((error) => {
  console.error('CV export failed.')
  console.error(error)
  process.exit(1)
})
