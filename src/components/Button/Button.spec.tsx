import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Button } from '.'

describe('<Button />', () => {
  it('should render the button component', () => {
    const { container } = render(<Button mode="dark" size="md" title="Click" type="primary" />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
