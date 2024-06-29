import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { useTranslation } from 'react-i18next'

import './styles.scss'
import { useSteps } from '@/hooks/StepsContext'
import { router } from '@/router'
import { STEPS_PATHS } from '@/hooks/@types/steps'

export function FooterStep() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { actionStep } = useSteps()

  function handleNextStep() {
    const path = router.state.location.pathname

    const stepsMap = {
      [STEPS_PATHS.BREED]: STEPS_PATHS.NAME,
      [STEPS_PATHS.NAME]: STEPS_PATHS.SIZE,
      [STEPS_PATHS.SIZE]: STEPS_PATHS.WEIGHT,
      [STEPS_PATHS.WEIGHT]: STEPS_PATHS.IMPORTANT_DATES,
      [STEPS_PATHS.IMPORTANT_DATES]: STEPS_PATHS.CARETAKERS
    }

    const nextStep = stepsMap[path]
    if (nextStep) {
      actionStep(nextStep)
    }
  }

  return (
    <footer className={`next-step next-step__${theme}`}>
      <Subtitle size="3" type="semibold">
        {t('utils.actions.title')}
      </Subtitle>
      <div className="actions">
        <Button variant="planed-ghost" size="lg">
          {t('utils.actions.skip_step')}
        </Button>
        <Button variant="primary" size="lg" onClick={() => handleNextStep()}>
          {t('utils.actions.confirm_step')}
        </Button>
      </div>
    </footer>
  )
}
