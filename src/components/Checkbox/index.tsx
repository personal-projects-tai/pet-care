import { useTheme } from '@/hooks/ThemeContext'

export type Props = {
  id?: string
}

export function Checkbox({ id }: Props) {
  const { theme } = useTheme()
  return (
    <>
      <input role="checkbox" id={id} type="checkbox" className={`inpt inpt__${theme}`} />
    </>
  )
}
