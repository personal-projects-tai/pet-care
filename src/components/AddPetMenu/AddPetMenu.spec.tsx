import { fireEvent, render, screen } from '@testing-library/react'
import { useTranslation } from 'react-i18next'
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest'

import { STEPS_PATHS } from '@/hooks/@types/steps'
import { useSteps } from '@/hooks/StepsContext'
import { router } from '@/router'

import { AddPetMenu } from '.'

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

interface ArrowLeftProps {
  [key: string]: unknown
}

vi.mock('@/assets/icons/arrow-left.svg?react', () => ({
  default: (props: ArrowLeftProps) => <svg {...props} />
}))

describe('AddPetMenu', () => {
  const mockT = vi.fn()
  const mockActionStep = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()

    ;(useTranslation as Mock).mockReturnValue({
      t: mockT
    })

    ;(useSteps as Mock).mockReturnValue({
      step: 'breed',
      numericStep: 1,
      actionStep: mockActionStep
    })

    router.state.location.pathname = ''
  })

  it('renders with initial state', () => {
    mockT.mockImplementation((key: string) => key)

    render(<AddPetMenu />)

    expect(screen.getByText('dashboard.add_pet.menu.title')).toBeInTheDocument()
    expect(screen.getByText('dashboard.add_pet.menu.type.breed')).toBeInTheDocument()
    expect(screen.getByText('dashboard.add_pet.menu.step')).toBeInTheDocument()
    expect(screen.getByText('1/6')).toBeInTheDocument()
  })

  it('handles back step correctly', () => {
    mockT.mockImplementation((key: string) => key)

    router.state.location.pathname = STEPS_PATHS.NAME

    render(<AddPetMenu />)

    const backButton = screen.getByRole('img')
    fireEvent.click(backButton)

    expect(mockActionStep).toHaveBeenCalledWith(STEPS_PATHS.BREED)
  })

  it('does not call actionStep for unknown path', () => {
    mockT.mockImplementation((key: string) => key)

    router.state.location.pathname = '/unknown'

    render(<AddPetMenu />)

    const backButton = screen.getByRole('img')
    fireEvent.click(backButton)

    expect(mockActionStep).not.toHaveBeenCalled()
  })
})
