import { useEffect, useState } from 'react'

export const useScrollSpy = (ids: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = ''
      
      for (const id of ids) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= offset && rect.bottom >= offset) {
            currentActiveId = id
            break
          }
        }
      }

      // If we're at the very top, active id is first section or empty
      if (window.scrollY === 0) {
        currentActiveId = ''
      }
      
      // If we're at the very bottom, active id is last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        currentActiveId = ids[ids.length - 1]
      }

      setActiveId(currentActiveId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids, offset])

  return activeId
}
