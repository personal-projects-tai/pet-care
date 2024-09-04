import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SwitchButton } from '.'

describe('<Switch />', () => {
  it('should render the heading', () => {
    render(<SwitchButton />)

    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
})
