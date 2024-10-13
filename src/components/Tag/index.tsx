import './styles.scss'

import { ReactNode } from 'react'

interface TagProps {
  type: string
  children: ReactNode
}

export function Tag({ type, children }: TagProps) {
  return <span className={`tag ${type}`}>{children}</span>
}
