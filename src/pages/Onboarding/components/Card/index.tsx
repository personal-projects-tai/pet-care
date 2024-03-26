import './styles.scss'
import { useTheme } from '@/hooks/ThemeContext'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  const { theme } = useTheme()
  return (
    <div role="presentation" className={`card card__${theme}`}>
      {children}
    </div>
  )
}
