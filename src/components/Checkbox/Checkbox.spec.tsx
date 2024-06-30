import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Checkbox } from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    render(<Checkbox />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
