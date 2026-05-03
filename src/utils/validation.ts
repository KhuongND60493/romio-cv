export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export interface ContactFormValidationMessages {
  nameRequired: string
  emailRequired: string
  emailInvalid: string
  messageRequired: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateContactForm = (
  values: ContactFormValues,
  messages?: ContactFormValidationMessages,
): ContactFormErrors => {
  const m = messages ?? {
    nameRequired: 'Please enter your name.',
    emailRequired: 'Please enter your email.',
    emailInvalid: 'Please enter a valid email address.',
    messageRequired: 'Please describe your project or opportunity.',
  }
  const errors: ContactFormErrors = {}

  if (!values.name.trim()) {
    errors.name = m.nameRequired
  }

  if (!values.email.trim()) {
    errors.email = m.emailRequired
  } else if (!emailPattern.test(values.email)) {
    errors.email = m.emailInvalid
  }

  if (!values.message.trim()) {
    errors.message = m.messageRequired
  }

  return errors
}
