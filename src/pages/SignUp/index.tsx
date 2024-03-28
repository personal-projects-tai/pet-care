import './styles.scss'

import { useTheme } from '@/hooks/ThemeContext'

import { Link } from 'react-router-dom'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { Checkbox } from '@/components/Checkbox'
import { Card } from '../Onboarding/components/Card'

import User from '@/assets/icons/user.svg?react'

export function SignUp() {
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
        Create account
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        Welcome! Please enter your information below and get started.
      </Subtitle>
      <form className="sign-up-form">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <div>
          <Checkbox id="accept" />
          <label htmlFor="accept" className={`label-${theme}`}>
            Accept Terms and Conditions
          </label>
        </div>
      </form>
      <Button size="lg" type="primary">
        Create account
      </Button>
      <div className="log-in-context">
        <span className={`have-account__${theme}`}>Already have an account?</span>
        <Link to={'/login'} className={`anchor-${theme}`}>
          Log in here
        </Link>
      </div>
    </Card>
  )
}
