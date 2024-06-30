import { ReactNode } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  size: '1' | '2' | '3'
  type: 'regular' | 'semibold' | 'underlined'
  centered?: boolean
  children: ReactNode
}

export function Subtitle({ size, type, children, centered = false }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <h2
        role="subtitle"
        className={`subtitle subtitle__${size} subtitle__${type} subtitle__${theme} ${
          centered ? 'text-centered' : null
        }`}
      >
        {children}
      </h2>
    </>
  )
}
