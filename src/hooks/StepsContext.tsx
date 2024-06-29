import { router } from '@/router'
import { ReactNode, createContext, useContext, useEffect, useState, useCallback } from 'react'
import { STEPS_PATHS } from './@types/steps'

type StepType = 'breed' | 'name' | 'size' | 'weight' | 'important_dates' | 'caretakers'

interface StepsContextProps {
  step: StepType
  actionStep: (path: string) => void
  numericStep: number
}

interface StepsProviderProps {
  children: ReactNode
}

const StepsContext = createContext({} as StepsContextProps)

export function StepsProvider({ children }: StepsProviderProps) {
  const [step, setStep] = useState<StepType>('breed')
  const [numericStep, setNumericStep] = useState<number>(1)
  const [currentPath, setCurrentPath] = useState<string>(router.state.location.pathname)

  function actionStep(path: string) {
    setCurrentPath(path)
    router.navigate(path)
    console.log('path action', path)
  }

  const toggleStep = useCallback(() => {
    const stepsMap: { [key: string]: { step: StepType; numericStep: number } } = {
      [STEPS_PATHS.BREED]: { step: 'breed', numericStep: 1 },
      [STEPS_PATHS.NAME]: { step: 'name', numericStep: 2 },
      [STEPS_PATHS.SIZE]: { step: 'size', numericStep: 3 },
      [STEPS_PATHS.WEIGHT]: { step: 'weight', numericStep: 4 },
      [STEPS_PATHS.IMPORTANT_DATES]: { step: 'important_dates', numericStep: 5 },
      [STEPS_PATHS.CARETAKERS]: { step: 'caretakers', numericStep: 6 }
    }

    const currentStep = stepsMap[currentPath]
    if (currentStep) {
      setStep(currentStep.step)
      setNumericStep(currentStep.numericStep)
      setCurrentPath(currentStep.step)
    }
  }, [currentPath, setStep, setNumericStep])

  useEffect(() => {
    toggleStep()
  }, [toggleStep, currentPath])

  return <StepsContext.Provider value={{ step, actionStep, numericStep }}>{children}</StepsContext.Provider>
}

export const useSteps = () => {
  const context = useContext(StepsContext)

  return context
}
