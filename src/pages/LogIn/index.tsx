import { useTheme } from '@/hooks/ThemeContext'
import { Card } from '../Onboarding/components/Card'
import { Heading } from '@/components/Heading'

import User from '@/assets/icons/user.svg?react'

import './styles.scss'
import { Subtitle } from '@/components/Subtitle'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'

export function LogIn() {
  const { theme } = useTheme()
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
        Log in
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        Welcome back! Please enter your information below and get started.
      </Subtitle>
      <form className="sign-up-form">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </form>
      <Button size="lg" type="primary">
        Log in
      </Button>
      <div className="log-in-context">
        <span className={`have-account__${theme}`}>Don't have an account?</span>
        <Link to={'/sign-up'} className={`anchor-${theme}`}>
          Sign up here
        </Link>
      </div>
    </Card>
  )
}
