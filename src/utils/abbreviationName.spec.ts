import { describe, expect, it } from 'vitest'

import { abbreviate } from './abbreviationName'

describe('abbreviate', () => {
  it('should return the initials for a standard full name', () => {
    expect(abbreviate('John Doe')).toBe('JD')
  })

  it('should return the initials for a name with middle name', () => {
    expect(abbreviate('Jane Mary Doe')).toBe('JD')
  })

  it('should handle single word names gracefully', () => {
    expect(abbreviate('Cher')).toBe('C')
  })

  it('should handle names with extra spaces', () => {
    expect(abbreviate('   John   Doe   ')).toBe('JD')
  })

  it('should handle names with non-alphabet characters', () => {
    expect(abbreviate('John Doe-Smith')).toBe('JD')
  })

  it('should return empty string if name is empty', () => {
    expect(abbreviate('')).toBe('')
  })
})
