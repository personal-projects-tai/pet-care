import { describe, expect, it } from 'vitest'

import { CheckPasswordStrength } from './password'

describe('CheckPasswordStrength', () => {
  it('Should return 0 when password has no length', () => {
    const password = ''
    const strength = CheckPasswordStrength(password)

    expect(strength).toBe(0)
  })

  it('Should return 1 when password length is less than 8 characters', () => {
    const password = 'ábghkow'
    const strength = CheckPasswordStrength(password)

    expect(strength).toBe(1)
  })

  it('Should return 2 when password contains both lower and uppercase characters', () => {
    const password = 'Password'
    const strength = CheckPasswordStrength(password)

    expect(strength).toBe(2)
  })

  it('Should return 3 when password contains numbers and characters', () => {
    const password = 'Password1'
    const strength = CheckPasswordStrength(password)

    expect(strength).toBe(3)
  })

  it('Should return 4 when password contains at least one special character', () => {
    const password = 'Password1!'
    const strength = CheckPasswordStrength(password)

    expect(strength).toBe(4)
  })
})
