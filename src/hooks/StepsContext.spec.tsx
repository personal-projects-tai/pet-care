import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { router } from '@/router'

import { STEPS_PATHS } from './@types/steps'
import { StepsProvider, useSteps } from './StepsContext'

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

const TestComponent = () => {
  const { step, actionStep, numericStep } = useSteps()

  return (
    <div>
      <div data-testid="step">{step}</div>
      <div data-testid="numericStep">{numericStep}</div>
      <button onClick={() => actionStep(STEPS_PATHS.NAME)}>Go to name</button>
    </div>
  )
}

describe('StepsProvider', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('initial state is breed step and numericStep is 1', () => {
    render(
      <StepsProvider>
        <TestComponent />
      </StepsProvider>
    )

    expect(screen.getByTestId('step')).toHaveTextContent('breed')
    expect(screen.getByTestId('numericStep')).toHaveTextContent('1')
  })

  it('actionStep updates step and numericStep', () => {
    render(
      <StepsProvider>
        <TestComponent />
      </StepsProvider>
    )

    act(() => {
      screen.getByText('Go to name').click()
    })

    expect(router.navigate).toHaveBeenCalledWith(STEPS_PATHS.NAME)
    expect(screen.getByTestId('step')).toHaveTextContent('name')
    expect(screen.getByTestId('numericStep')).toHaveTextContent('2')
  })

  it('toggleStep updates step and numericStep based on currentStep', () => {
    router.state.location.pathname = STEPS_PATHS.NAME

    render(
      <StepsProvider>
        <TestComponent />
      </StepsProvider>
    )

    expect(screen.getByTestId('step')).toHaveTextContent('name')
    expect(screen.getByTestId('numericStep')).toHaveTextContent('2')
  })

  it('toggleStep handles and unknown path', () => {
    router.state.location.pathname = '/unknown'

    render(
      <StepsProvider>
        <TestComponent />
      </StepsProvider>
    )

    expect(screen.getByTestId('step')).toHaveTextContent('breed')
    expect(screen.getByTestId('numericStep')).toHaveTextContent('1')
  })
})
