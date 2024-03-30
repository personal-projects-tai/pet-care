import { useState } from 'react'
import { useTheme } from '@/hooks/ThemeContext'

import Eye from '@/assets/icons/eye.svg?react'
import EyeSlash from '@/assets/icons/eye-slash.svg?react'

export type Props = {
  type: 'number' | 'text' | 'button' | 'date' | 'email' | 'password'
  placeholder?: string
  id?: string
}

export function Input({ placeholder, type, id }: Props) {
  const { theme } = useTheme()

  const [passwordIsSaw, setPasswordIsSaw] = useState<boolean>(true)

  const handleShowPassword = () => {
    setPasswordIsSaw(state => !state)
  }

  const renderIcon = () => {
    if (type === 'password') {
      if (passwordIsSaw) {
        return <Eye onClick={handleShowPassword} />
      } else {
        return <EyeSlash onClick={handleShowPassword} />
      }
    }
    return null
  }

  const typeInput = () => {
    if (type === 'password') {
      if (passwordIsSaw) {
        return 'password'
      } else {
        return 'text'
      }
    } else {
      return type
    }
  }

  return (
    <div className="inpt-container">
      <input role="input" id={id} type={typeInput()} placeholder={placeholder} className={`inpt inpt__${theme}`} />
      {renderIcon()}
    </div>
  )
}
