import { useTheme } from '@/hooks/ThemeContext'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'outlined' | 'planed' | 'destructive' | 'ghost' | 'planed-ghost' | 'dashed'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Button({ variant, size, children, ...rest }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <button role="button" className={`btn btn__${size} btn__${variant}__${theme}`} {...rest}>
        {children}
      </button>
    </>
  )
}
