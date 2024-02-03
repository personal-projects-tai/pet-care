export type Props = {
  subtitle: string
  size: string
  type: string
  mode: string
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
