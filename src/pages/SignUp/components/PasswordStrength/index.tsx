import { CheckPasswordStrength } from '@/utils/password'

import './styles.scss'
import { useEffect, useState } from 'react'
import { useTheme } from '@/hooks/ThemeContext'

interface Props {
  password: string
}

interface StrengthType {
  [key: number]: {
    description: string
    color: string
  }
}

export function PasswordStrength({ password }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const strength: StrengthType = {
    0: {
      description: 'empty',
      color: 'default'
    },
    1: {
      description: 'weak',
      color: 'weak'
    },
    2: {
      description: 'medium',
      color: 'medium'
    },
    3: {
      description: 'strong',
      color: 'strong'
    },
    4: {
      description: 'very-strong',
      color: 'very-strong'
    }
  }

  const possibleStrengths = [1, 2, 3, 4]

  const { theme } = useTheme()

  const passwordStrength = CheckPasswordStrength(password)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={`password-strength ${isVisible && 'visible'}`}>
      {possibleStrengths.map((_, index) => (
        <span
          key={index}
          className={`strength strength__${theme} strength__${
            passwordStrength > index && strength[passwordStrength].color
          }`}
        ></span>
      ))}
    </div>
  )
}
