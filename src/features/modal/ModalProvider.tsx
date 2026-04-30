import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import Modal from 'react-modal'
import styles from './modal.module.css'

interface ModalContextType {
  isOpen: boolean
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Modal.setAppElement('#root')
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
  }

  const openModal = (nextContent: React.ReactNode) => {
    setContent(nextContent)
    setIsOpen(true)
  }

  const contextValue = useMemo(
    () => ({ isOpen, openModal, closeModal }),
    [isOpen],
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useAppModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useAppModal must be used within a ModalProvider')
  }
  return context
}
