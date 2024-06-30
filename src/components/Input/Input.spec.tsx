import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from '.'

describe('<Input />', () => {
  it('should render the input component', () => {
    render(<Input placeholder="Username" type="text" />)

    expect(screen.getByRole('input')).toBeInTheDocument()
  })
})
