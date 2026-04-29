import { screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import { renderComponent } from '../test/test-utils'
import { portfolioData } from '../utils/portfolioData'

describe('HeroSection', () => {
  it('renders name and title from profile data', () => {
    renderComponent(<HeroSection profile={portfolioData.profile} />)

    expect(
      screen.getByRole('heading', { name: portfolioData.profile.hero.fullName }),
    ).toBeInTheDocument()
    expect(screen.getByText(portfolioData.profile.hero.title)).toBeInTheDocument()
  })
})
