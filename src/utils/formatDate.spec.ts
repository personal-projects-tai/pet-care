import { afterEach, describe, expect, it } from 'vitest'

import { formatDate } from './formatDate'

describe('formatDate', () => {
  const originalNavigatorLanguage = navigator.language

  afterEach(() => {
    Object.defineProperty(navigator, 'language', {
      value: originalNavigatorLanguage,
      configurable: true
    })
  })

  it('should format the date as MM/DD/YYYY for en-US locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YY for en-GB locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'en-GB',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YYYY for fr-FR locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'fr-FR',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YYYY for pt-PT locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'pt-PT',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YYYY for pt-BR locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'pt-BR',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YYYY for es-ES locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'es-ES',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date as DD/MM/YYYY for es-MX locale', () => {
    Object.defineProperty(navigator, 'language', {
      value: 'es-MX',
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })

  it('should format the date correctly when no locale is available (fallback to en-US)', () => {
    Object.defineProperty(navigator, 'language', {
      value: undefined,
      configurable: true
    })

    const date = new Date('2021-10-10 00:00:00')
    const formattedDate = formatDate(date)

    expect(formattedDate).toBe('10/10/2021')
  })
})
