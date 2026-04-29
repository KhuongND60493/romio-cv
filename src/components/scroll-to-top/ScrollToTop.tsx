import { useEffect, useState } from 'react'
import styles from './ScrollToTop.module.css'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className={styles.scrollBtn}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

