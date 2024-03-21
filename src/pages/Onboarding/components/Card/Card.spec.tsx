import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Card } from '.'

describe('<Card />', () => {
  it('should render the card component', () => {
    render(<Card />)

    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })
})
