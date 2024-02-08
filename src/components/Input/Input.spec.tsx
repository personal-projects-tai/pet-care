import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Input } from '.'

describe('<Input />', () => {
  it('should render the input component', () => {
    render(<Input mode="dark" placeholder="Username" type="text" />)

    expect(screen.getByRole('input')).toBeInTheDocument()
  })
})
