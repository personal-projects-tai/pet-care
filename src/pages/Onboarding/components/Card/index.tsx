import './styles.scss'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

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
