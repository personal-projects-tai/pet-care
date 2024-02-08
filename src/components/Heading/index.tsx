export type Props = {
  heading: string
  type: '1' | '2' | '3' | '4'
  mode: 'dark' | 'light'
}

export function Heading({ heading, mode, type }: Props) {
  return (
    <>
      <h1 role="heading" className={`heading heading__${type} heading__${mode}`}>
        {heading}
      </h1>
    </>
  )
}
