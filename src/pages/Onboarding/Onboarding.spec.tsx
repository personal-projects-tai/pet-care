import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Onboarding } from '.'

describe('<Onboarding />', () => {
  it('should render the heading', () => {
    render(<Onboarding />)

    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
