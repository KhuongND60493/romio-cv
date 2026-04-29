import { screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import { renderComponent } from '../test/test-utils'
import { getPortfolioData } from '../utils/portfolioData'

const portfolioData = getPortfolioData('en')

describe('HeroSection', () => {
  it('renders name and title from profile data', () => {
    renderComponent(<HeroSection profile={portfolioData.profile} />)

    expect(
      screen.getByRole('heading', { name: portfolioData.profile.hero.fullName }),
    ).toBeInTheDocument()
  })
})
