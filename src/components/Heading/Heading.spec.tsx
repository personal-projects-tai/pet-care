import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading type="1">Heading</Heading>)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
