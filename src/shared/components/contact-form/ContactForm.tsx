import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { validateContactForm } from '@/utils/validation'
import { useTranslation } from 'react-i18next'
import styles from './ContactForm.module.css'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

export const ContactForm = () => {
  const { t } = useTranslation()
  const [values, setValues] = useState(initialValues)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showErrors, setShowErrors] = useState(false)

  const errors = useMemo(
    () =>
      validateContactForm(values, {
        nameRequired: t('contact.form.errors.nameRequired'),
        emailRequired: t('contact.form.errors.emailRequired'),
        emailInvalid: t('contact.form.errors.emailInvalid'),
        messageRequired: t('contact.form.errors.messageRequired'),
      }),
    [t, values],
  )

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
          <label htmlFor="name">{t('contact.form.name.label')}</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder={t('contact.form.name.placeholder')}
          />
          {showErrors && errors.name ? <span>{errors.name}</span> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">{t('contact.form.email.label')}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder={t('contact.form.email.placeholder')}
          />
          {showErrors && errors.email ? <span>{errors.email}</span> : null}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">{t('contact.form.message.label')}</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            placeholder={t('contact.form.message.placeholder')}
          />
          {showErrors && errors.message ? <span>{errors.message}</span> : null}
        </div>

        <button className={styles.submit} type="submit">
          {t('contact.form.submit')}
        </button>
      </form>

      <div
        role="status"
        aria-live="polite"
        className={styles.toast}
        data-visible={isSubmitted}
      >
        {t('contact.form.success')}
      </div>
    </div>
  )
}

