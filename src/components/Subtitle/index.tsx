export type Props = {
  subtitle: string
  size: '1' | '2' | '3'
  type: 'regular' | 'semibold' | 'underlined'
  mode: 'dark' | 'light'
}

export function Subtitle({ subtitle, size, type, mode }: Props) {
  return (
    <>
      <h2 role="subtitle" className={`subtitle subtitle__${size} subtitle__${type} subtitle__${mode}`}>
        {subtitle}
      </h2>
    </>
  )
}
