import { screen } from '@testing-library/react'
import { Header } from './Header'
import { renderComponent } from '../test/test-utils'

describe('Header', () => {
  it('renders navigation items', () => {
    renderComponent(
      <Header
        navigationItems={[
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ]}
        socialLinks={[
          {
            label: 'GitHub',
            href: 'https://github.com/example',
            ariaLabel: 'GitHub profile',
          },
        ]}
        theme="dark"
        onToggleTheme={() => undefined}
      />,
    )

    expect(screen.getByRole('navigation', { name: 'Primary' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '#about',
    )
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    )
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
