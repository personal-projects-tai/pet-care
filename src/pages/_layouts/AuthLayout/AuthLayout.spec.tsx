import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { AuthLayout } from '.'

describe('<AuthLayout />', () => {
  it('should render the heading', () => {
    render(<AuthLayout />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
