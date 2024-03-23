import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  title: string
  type: 'primary' | 'secondary' | 'outlined' | 'planed' | 'destructive' | 'ghost' | 'planed-ghost' | 'dashed'
  size: 'sm' | 'md' | 'lg'
}

export function Button({ title, type, size }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <button role="button" className={`btn btn__${size} btn__${type}__${theme}`}>
        {title}
      </button>
    </>
  )
}
