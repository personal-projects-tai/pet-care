import './styles.scss'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import User from '@/assets/icons/user.svg?react'
import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'

import { Card } from '../Onboarding/components/Card'
import { PasswordStrength } from './components/PasswordStrength'

const signUpForm = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignUpType = z.infer<typeof signUpForm>

export function SignUp() {
  const { theme } = useTheme()

  const { t } = useTranslation()

  const { register, handleSubmit, watch } = useForm<SignUpType>({
    resolver: zodResolver(signUpForm)
  })

  const handleSignUp = (data: SignUpType) => {
    console.log(data)
  }
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
        {t('sign_up.title')}
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        {t('sign_up.description')}
      </Subtitle>
      <form className="sign-up-form" onSubmit={handleSubmit(handleSignUp)}>
        <Input placeholder={t('utils.email')} type="email" {...register('email')} />
        <Input placeholder={t('utils.password')} type="password" {...register('password')} />
        {watch('password') && <PasswordStrength password={watch('password')} />}
        <div>
          <Checkbox id="accept" />
          <label htmlFor="accept" className={`label-${theme}`}>
            {t('sign_up.accept_terms')}
          </label>
        </div>
        <Button size="lg" variant="primary">
          {t('sign_up.create_sign_up')}
        </Button>
      </form>
      <div className="log-in-context">
        <span className={`have-account__${theme}`}>{t('sign_up.has_account')}</span>
        <Link to={'/login'} className={`anchor-${theme}`}>
          {t('sign_up.login_link')}
        </Link>
      </div>
    </Card>
  )
}
