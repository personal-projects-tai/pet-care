export type Props = {
  heading: string
  type: string
  mode: string
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
