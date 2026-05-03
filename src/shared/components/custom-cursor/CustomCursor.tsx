import { useEffect, useState } from 'react'
import { FaHandPointer } from 'react-icons/fa6'
import styles from './CustomCursor.module.css'

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mediaQuery.matches) {
      return
    }

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
      setIsVisible(true)

      const target = event.target as Element | null
      setIsPointer(Boolean(target?.closest(INTERACTIVE_SELECTOR)))
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <>
      <span
        className={[
          styles.cursorRing,
          isPointer ? styles.cursorRingInteractive : '',
          isPressed ? styles.cursorRingPressed : '',
        ].join(' ')}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <span
        className={[
          styles.cursorDot,
          isPointer ? styles.cursorDotInteractive : '',
          isPressed ? styles.cursorDotPressed : '',
        ].join(' ')}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      <span
        className={[
          styles.cursorHand,
          isPointer ? styles.cursorHandVisible : '',
          isPressed ? styles.cursorHandPressed : '',
        ].join(' ')}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        <FaHandPointer />
      </span>
    </>
  )
}
