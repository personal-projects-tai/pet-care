import { useTheme } from '@/hooks/ThemeContext'
import { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'secondary' | 'outlined' | 'planed' | 'destructive' | 'ghost' | 'planed-ghost' | 'dashed'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ type, size, children }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <button role="button" className={`btn btn__${size} btn__${type}__${theme}`}>
        {children}
      </button>
    </>
  )
}
