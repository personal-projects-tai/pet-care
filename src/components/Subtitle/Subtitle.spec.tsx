import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Subtitle } from '.'

describe('<Subtitle />', () => {
  it('should render the heading', () => {
    render(
      <Subtitle size="1" type="regular">
        Subtitle
      </Subtitle>
    )

    expect(screen.getByRole('subtitle')).toBeInTheDocument()
  })
})
