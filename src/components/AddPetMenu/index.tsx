import { Heading } from '../Heading'

import ArrowLeft from '@/assets/icons/arrow-left.svg?react'

import './styles.scss'
import { Subtitle } from '../Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { useTranslation } from 'react-i18next'
import { router } from '@/router'
import { useSteps } from '@/hooks/StepsContext'
import { STEPS_PATHS } from '@/hooks/@types/steps'

export function AddPetMenu() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { step, numericStep, actionStep } = useSteps()

  function handleBackStep() {
    const path = router.state.location.pathname

    const stepsMap = {
      [STEPS_PATHS.NAME]: STEPS_PATHS.BREED,
      [STEPS_PATHS.SIZE]: STEPS_PATHS.NAME,
      [STEPS_PATHS.WEIGHT]: STEPS_PATHS.SIZE,
      [STEPS_PATHS.IMPORTANT_DATES]: STEPS_PATHS.WEIGHT
    }

    const nextStep = stepsMap[path]
    if (nextStep) {
      actionStep(nextStep)
    }
  }

  return (
    <div className="add-pet-menu">
      <div className={`add-pet-menu__items add-pet-menu__items__${theme}`}>
        <ArrowLeft onClick={() => handleBackStep()} />
        <span className="add-pet-menu__title">
          <Heading type="3">{t('dashboard.add_pet.menu.title')}</Heading>
          <Subtitle type="regular" size="3" centered>
            {t(`dashboard.add_pet.menu.type.${step}`)}
          </Subtitle>
        </span>
        <Subtitle type="regular" size="3">
          {t('dashboard.add_pet.menu.step')}
          <p>{numericStep}/6</p>
        </Subtitle>
      </div>
      <div className={`add-pet-menu__progress-bar add-pet-menu__progress-bar__${theme}`}>
        <div className={`add-pet-menu__progress-bar-inner ${step}`}></div>
      </div>
    </div>
  )
}
