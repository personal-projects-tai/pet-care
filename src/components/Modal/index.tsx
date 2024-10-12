import './styles.scss'

import { ReactNode, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/assets/icons/close.svg?react'
import { useTheme } from '@/hooks/ThemeContext'

import { Button } from '../Button'

type KindModal = 'informational' | 'additional'

interface ModalProps {
  title: string
  children: ReactNode
  kindModal: KindModal
  close: () => void
  isOpen: boolean
}

export function Modal({ title, children, kindModal, close, isOpen }: ModalProps) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  function renderFooter() {
    switch (kindModal) {
      case 'additional':
        return (
          <div className="additional">
            <Button variant="destructive" size="md">
              {t('modal.actions.additional.cancel')}
            </Button>
            <Button variant="primary" size="md">
              {t('modal.actions.additional.confirm')}
            </Button>
          </div>
        )
      case 'informational':
        return (
          <div className="informational">
            <Button variant="primary" size="md">
              {t('modal.actions.informational.done')}
            </Button>
          </div>
        )
      default:
        return ''
    }
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [close])

  return (
    <div className={`backdrop-modal ${isOpen ? 'active' : ''}`} onClick={close}>
      <div className={`modal modal__${theme} ${isOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
        <header>
          <span>{title}</span>
          <CloseIcon onClick={close} />
        </header>
        <section>{children}</section>
        <footer>{renderFooter()}</footer>
      </div>
    </div>
  )
}
