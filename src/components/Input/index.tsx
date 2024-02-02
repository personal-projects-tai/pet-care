export type Props = {
  type: string
  placeholder: string
  mode: 'light' | 'dark'
}

export function Input({ mode, placeholder, type }: Props) {
  return (
    <>
      <input role="input" type={type} placeholder={placeholder} className={`inpt__${mode}`} />
    </>
  )
}
