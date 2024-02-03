export type Props = {
  type: 'number' | 'text' | 'button' | 'checkbox' | 'date' | 'email' | 'password'
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
