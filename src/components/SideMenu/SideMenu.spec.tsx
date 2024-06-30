import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { SideMenu } from '.'

describe('<SideMenu />', () => {
  it('should render the SideMenu', () => {
    render(<SideMenu />)

    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
})
