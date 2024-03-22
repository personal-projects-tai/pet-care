import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  type: 'number' | 'text' | 'button' | 'checkbox' | 'date' | 'email' | 'password'
  placeholder: string
}

export function Input({ placeholder, type }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <input role="input" type={type} placeholder={placeholder} className={`inpt__${theme}`} />
    </>
  )
}
