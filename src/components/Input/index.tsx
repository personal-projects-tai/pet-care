import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  type: 'number' | 'text' | 'button' | 'checkbox' | 'date' | 'email' | 'password'
  placeholder?: string
  id?: string
}

export function Input({ placeholder, type, id }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <input role="input" id={id} type={type} placeholder={placeholder} className={`inpt inpt__${theme}`} />
    </>
  )
}
