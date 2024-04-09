import './styles.scss'

import { useTheme } from '@/hooks/ThemeContext'

import { Link } from 'react-router-dom'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { Checkbox } from '@/components/Checkbox'
import { Card } from '../Onboarding/components/Card'
import { PasswordStrength } from './components/PasswordStrength'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import User from '@/assets/icons/user.svg?react'

const signUpForm = z.object({
  email: z.string().email(),
  password: z.string()
})

type SignUpType = z.infer<typeof signUpForm>

export function SignUp() {
  const { theme } = useTheme()

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
        Create account
      </Heading>
      <Subtitle size="2" type="regular" centered={true}>
        Welcome! Please enter your information below and get started.
      </Subtitle>
      <form className="sign-up-form" onSubmit={handleSubmit(handleSignUp)}>
        <Input placeholder="Email" type="email" {...register('email')} />
        <Input placeholder="Password" type="password" {...register('password')} />
        {watch('password') && <PasswordStrength password={watch('password')} />}
        <div>
          <Checkbox id="accept" />
          <label htmlFor="accept" className={`label-${theme}`}>
            Accept Terms and Conditions
          </label>
        </div>
        <Button size="lg" type="primary">
          Create account
        </Button>
      </form>
      <div className="log-in-context">
        <span className={`have-account__${theme}`}>Already have an account?</span>
        <Link to={'/login'} className={`anchor-${theme}`}>
          Log in here
        </Link>
      </div>
    </Card>
  )
}
