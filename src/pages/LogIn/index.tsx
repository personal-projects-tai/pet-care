import './styles.scss'

import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import User from '@/assets/icons/user.svg?react'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { router } from '@/router'

import { Card } from '../Onboarding/components/Card'

export function LogIn() {
  const { theme } = useTheme()

  function handleLogin() {
    router.navigate('/dashboard')
  }
  const { t } = useTranslation()
  return (
    <Card>
      <div className="icon">
        <div className={`rounded-out rounded-out__${theme}`}>
          <div className={`rounded-in rounded-in__${theme}`}>
            <User />
          </div>
        </div>
      </div>
      <Heading type="1" centered={true}>
        {t('login.title')}
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        {t('login.description')}
      </Subtitle>
      <form className="sign-up-form" onSubmit={handleLogin}>
        <Input placeholder={t('utils.email')} type="email" />
        <Input placeholder={t('utils.password')} type="password" />
      </form>
      <Button size="lg" variant="primary">
        {t('login.login_button')}
      </Button>
      <div className="log-in-context">
        <span className={`have-account__${theme}`}>{t('login.havent_account')}</span>
        <Link to={'/sign-up'} className={`anchor-${theme}`}>
          {t('login.sign_up_link')}
        </Link>
      </div>
    </Card>
  )
}
