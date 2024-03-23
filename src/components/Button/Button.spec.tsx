import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button component', () => {
    render(<Button size="md" title="Click" type="primary" />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
