import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Heading } from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading type="1">Heading</Heading>)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
