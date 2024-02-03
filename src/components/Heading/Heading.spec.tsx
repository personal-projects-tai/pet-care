import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Heading heading="Title" mode="dark" type="1" />)

    expect(screen.getByRole('heading')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
