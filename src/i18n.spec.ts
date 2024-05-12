import { describe, expect, it } from 'vitest'

import i18n from './i18n'

describe('i18n configuration', () => {
  it('should have initialized i18n', () => {
    expect(i18n.isInitialized).toBe(true)
  })

  it('should have initialized i18n with resources', () => {
    expect(i18n.isInitialized).toBeDefined()
  })

  it('should have initialized i18n with proper lng', () => {
    expect(i18n.language).toBe('pt-BR')
  })

  it('should have loaded translations for English', () => {
    expect(i18n.getResourceBundle('en', 'translation')).toBeDefined()
  })

  it('should have loaded translations for Spanish', () => {
    expect(i18n.getResourceBundle('es', 'translation')).toBeDefined()
  })

  it('should have loaded translations for European Portuguese', () => {
    expect(i18n.getResourceBundle('pt-PT', 'translation')).toBeDefined()
  })

  it('should have loaded translations for Brazilian Portuguese', () => {
    expect(i18n.getResourceBundle('pt-BR', 'translation')).toBeDefined()
  })
})
