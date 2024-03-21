import { ReactNode } from 'react'

export type Props = {
  size: '1' | '2' | '3'
  type: 'regular' | 'semibold' | 'underlined'
  mode: 'dark' | 'light'
  centered?: boolean
  children: ReactNode
}

export function Subtitle({ size, type, mode, children, centered = false }: Props) {
  return (
    <>
      <h2
        role="subtitle"
        className={`subtitle subtitle__${size} subtitle__${type} subtitle__${mode} ${
          centered ? 'text-centered' : null
        }`}
      >
        {children}
      </h2>
    </>
  )
}
