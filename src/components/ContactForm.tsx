import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { validateContactForm } from '../utils/validation'
import styles from './ContactForm.module.css'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

export const ContactForm = () => {
  const [values, setValues] = useState(initialValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const errors = useMemo(() => validateContactForm(values), [values])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setIsSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowErrors(true)

    if (Object.keys(errors).length > 0) {
      return
    }

    setIsSubmitted(true)
    setValues(initialValues)
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {showErrors && errors.name ? <span>{errors.name}</span> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {showErrors && errors.email ? <span>{errors.email}</span> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            placeholder="Tell me about the role, project, or product challenge."
          />
          {showErrors && errors.message ? <span>{errors.message}</span> : null}
        </div>

        <button className={styles.submit} type="submit">
          Send Inquiry
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={styles.toast}
        data-visible={isSubmitted}
      >
        Thanks, your message has been queued for follow-up.
      </div>
    </div>
  )
}
