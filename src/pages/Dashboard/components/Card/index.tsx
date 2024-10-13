import './styles.scss'

import { ReactNode } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

interface Props {
  children: ReactNode
  navigateTo?: () => void
}

export function Card({ children, navigateTo }: Props) {
  const { theme } = useTheme()
  return (
    <div onClick={navigateTo} className={`card-pet card-pet__${theme}`}>
      {children}
    </div>
  )
}
