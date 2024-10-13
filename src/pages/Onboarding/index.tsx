import './styles.scss'

import { useTranslation } from 'react-i18next'

import SquarePen from '@/assets/icons/square-pen.svg?react'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { router } from '@/router'

import { Card } from './components/Card'

export function Onboarding() {
  const { theme } = useTheme()

  const { t } = useTranslation()

  const handleSendToSignUp = () => {
    router.navigate('/sign-up')
  }

  const handleSendToDashboard = () => {
    router.navigate('/dashboard')
  }
  return (
    <Card>
      <div className="icon">
        <div className={`rounded-out rounded-out__${theme}`}>
          <div className={`rounded-in rounded-in__${theme}`}>
            <SquarePen />
          </div>
        </div>
      </div>
      <Heading type="1" centered={true}>
        {t('onboarding.title')}
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        {t('onboarding.description')}
      </Subtitle>
      <Button size="lg" variant="primary" onClick={handleSendToSignUp}>
        {t('onboarding.get_started')}
      </Button>
      <Button size="lg" variant="planed-ghost" onClick={handleSendToDashboard}>
        {t('onboarding.sign_up_later')}
      </Button>
    </Card>
  )
}
