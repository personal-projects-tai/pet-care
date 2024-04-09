import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PasswordStrength } from '.'

describe('<PasswordStrength />', () => {
  it('Should render 1 of strength weak indicators based on password strength', () => {
    const { container } = render(<PasswordStrength password="pass" />)
    const strengthIndicators = container.querySelectorAll('.strength__weak')

    expect(strengthIndicators.length).toBe(1)
  })

  it('Should render 2 of strength medium indicators based on password strength', () => {
    const { container } = render(<PasswordStrength password="passwordO" />)
    const strengthIndicators = container.querySelectorAll('.strength__medium')

    expect(strengthIndicators.length).toBe(2)
  })

  it('Should render 3 of strength strong indicators based on password strength', () => {
    const { container } = render(<PasswordStrength password="passwordO1" />)
    const strengthIndicators = container.querySelectorAll('.strength__strong')

    expect(strengthIndicators.length).toBe(3)
  })

  it('Should render 4 of strength very strong indicators based on password strength', () => {
    const { container } = render(<PasswordStrength password="passwordO1!" />)
    const strengthIndicators = container.querySelectorAll('.strength__very-strong')

    expect(strengthIndicators.length).toBe(4)
  })
})
