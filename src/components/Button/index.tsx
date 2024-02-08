export type Props = {
  title: string
  type: 'primary' | 'secondary' | 'outlined' | 'planed' | 'destructive' | 'ghost' | 'planed-ghost' | 'dashed'
  size: 'sm' | 'md' | 'lg'
  mode: 'light' | 'dark'
}

export function Button({ title, type, size, mode }: Props) {
  return (
    <>
      <button role="button" className={`btn btn__${size} btn__${type}__${mode}`}>
        {title}
      </button>
    </>
  )
}
