import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from 'vitest'

import { ThemeProvider, useTheme } from './ThemeContext'

describe('useTheme', () => {
  it('should return default theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    expect(result.current.theme).toBe('light')
  })

  it('should toggle theme', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('dark')
  })

  it('should toggle theme back to original', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    act(() => {
      result.current.toggleTheme()
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('light')
  })

  it('should apply theme class to body', () => {
    renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    expect(document.body.classList.contains('light')).toBe(true)
  })

  it('should switch theme class when theme changes', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider
    })

    act(() => {
      result.current.toggleTheme()
    })

    expect(document.body.classList.contains('dark')).toBe(true)
    expect(document.body.classList.contains('light')).toBe(false)
  })
})
