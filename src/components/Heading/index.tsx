import { ReactNode } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  type: '1' | '2' | '3' | '4'
  centered?: boolean
  children: ReactNode
}

export function Heading({ type, children, centered = false }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <h1 role="heading" className={`heading heading__${type} heading__${theme} ${centered ? 'text-centered' : null}`}>
        {children}
      </h1>
    </>
  )
}
