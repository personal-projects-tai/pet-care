import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, expect, it } from 'vitest'

import { SidebarProvider, useSidebar } from './DashboardSidebarContext'

describe('useSidebar', () => {
  it('should return default sidebar state', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: SidebarProvider
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('should toggle sidebar state', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: SidebarProvider
    })

    act(() => {
      result.current.toggleIsOpen()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('should handle window resize to open sidebar on larger screens', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: SidebarProvider
    })

    act(() => {
      global.innerWidth = 768
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current.isOpen).toBe(true)
  })
})
