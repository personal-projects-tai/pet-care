import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button component', () => {
    render(
      <Button size="md" variant="primary">
        Click
      </Button>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
