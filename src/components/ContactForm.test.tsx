import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'
import { renderComponent } from '../test/test-utils'

describe('ContactForm', () => {
  it('validates required fields and invalid email', async () => {
    const user = userEvent.setup()

    renderComponent(<ContactForm />)

    await user.click(screen.getByRole('button', { name: 'Send Inquiry' }))

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument()
    expect(
      screen.getByText('Please describe your project or opportunity.'),
    ).toBeInTheDocument()

    await user.type(screen.getByLabelText('Name'), 'Romio')
    await user.type(screen.getByLabelText('Email'), 'invalid-email')
    await user.type(screen.getByLabelText('Message'), 'Need architecture support.')
    await user.click(screen.getByRole('button', { name: 'Send Inquiry' }))

    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument()
  })
})
