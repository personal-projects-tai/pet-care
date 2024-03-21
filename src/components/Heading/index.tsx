import { ReactNode } from 'react'

export type Props = {
  type: '1' | '2' | '3' | '4'
  mode: 'dark' | 'light'
  centered?: boolean
  children: ReactNode
}

export function Heading({ mode, type, children, centered = false }: Props) {
  return (
    <>
      <h1 role="heading" className={`heading heading__${type} heading__${mode} ${centered ? 'text-centered' : null}`}>
        {children}
      </h1>
    </>
  )
}
