import './styles.scss'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

interface Props {
  children: ReactNode
}

export function Card({ children }: Props) {
  const { theme } = useTheme()
  return <div className={`card-pet card-pet__${theme}`}>{children}</div>
}
