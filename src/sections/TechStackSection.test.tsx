import { screen } from '@testing-library/react'
import skillsJson from '../data/skills.json'
import { TechStackSection } from './TechStackSection'
import { renderComponent } from '../test/test-utils'

describe('TechStackSection', () => {
  it('renders grouped skill categories and items', () => {
    renderComponent(<TechStackSection techStack={skillsJson.techStack} />)

    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('.NET Core')).toBeInTheDocument()
    expect(screen.getByText('ReactJS')).toBeInTheDocument()
    expect(screen.getByText('Grafana')).toBeInTheDocument()
  })
})
