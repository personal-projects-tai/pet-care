import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Subtitle } from '.'

describe('<Subtitle />', () => {
  it('should render the heading', () => {
    render(<Subtitle subtitle="Subtitle" mode="dark" size="1" type="regular" />)

    expect(screen.getByRole('subtitle')).toBeInTheDocument()
  })
})
