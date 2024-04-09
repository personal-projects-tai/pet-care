import { useTheme } from '@/hooks/ThemeContext'
import { Card } from './components/Card'

import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { Button } from '@/components/Button'

import SquarePen from '@/assets/icons/square-pen.svg?react'

import './styles.scss'
import { router } from '@/router'
import { useTranslation } from 'react-i18next'

export function Onboarding() {
  const { theme } = useTheme()

  const { t } = useTranslation()

  const handleSendToSignUp = () => {
    router.navigate('/sign-up')
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
      <Button size="lg" variant="planed-ghost">
        {t('onboarding.sign_up_later')}
      </Button>
    </Card>
  )
}
