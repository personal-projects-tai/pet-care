import { fireEvent, render, screen } from '@testing-library/react'
import { useTranslation } from 'react-i18next'
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest'

import { STEPS_PATHS } from '@/hooks/@types/steps'
import { useSteps } from '@/hooks/StepsContext'
import { router } from '@/router'

import { FooterStep } from '.'

vi.mock('react-i18next', () => ({
  useTranslation: vi.fn()
}))

vi.mock('@/hooks/StepsContext', () => ({
  useSteps: vi.fn()
}))

vi.mock('@/router', () => ({
  router: {
    state: {
      location: {
        pathname: ''
      }
    },
    navigate: vi.fn()
  }
}))

describe('FooterStep', () => {
  const mockT = vi.fn()
  const mockActionStep = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    ;(useTranslation as Mock).mockReturnValue({
      t: mockT
    })

    ;(useSteps as Mock).mockReturnValue({
      actionStep: mockActionStep
    })

    router.state.location.pathname = ''
  })

  it('renders with initial state', () => {
    mockT.mockImplementation((key: string) => key)

    render(<FooterStep />)
    expect(screen.getByText('utils.actions.title')).toBeInTheDocument()
    expect(screen.getByText('utils.actions.skip_step')).toBeInTheDocument()
    expect(screen.getByText('utils.actions.confirm_step')).toBeInTheDocument()
  })

  it('handles next step correctly', () => {
    mockT.mockImplementation((key: string) => key)

    router.state.location.pathname = STEPS_PATHS.BREED
    render(<FooterStep />)

    const confirmButton = screen.getByText('utils.actions.confirm_step')
    fireEvent.click(confirmButton)

    expect(mockActionStep).toHaveBeenCalledWith(STEPS_PATHS.NAME)
  })

  it('does not call actionStep for unknown path', () => {
    mockT.mockImplementation((key: string) => key)

    router.state.location.pathname = '/unknown'
    render(<FooterStep />)

    const confirmButton = screen.getByText('utils.actions.confirm_step')
    fireEvent.click(confirmButton)

    expect(mockActionStep).not.toHaveBeenCalled()
  })
})
