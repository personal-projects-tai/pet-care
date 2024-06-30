import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Header } from '.'

describe('<Header />', () => {
  it('should render the header component', () => {
    render(<Header />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
