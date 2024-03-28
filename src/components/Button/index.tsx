import { useTheme } from '@/hooks/ThemeContext'
import { ReactNode } from 'react'

export type Props = {
  type: 'primary' | 'secondary' | 'outlined' | 'planed' | 'destructive' | 'ghost' | 'planed-ghost' | 'dashed'
  size: 'sm' | 'md' | 'lg'
  children: ReactNode
  handleFn?: () => void
}

export function Button({ type, size, children, handleFn }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <button role="button" className={`btn btn__${size} btn__${type}__${theme}`} onClick={handleFn}>
        {children}
      </button>
    </>
  )
}
