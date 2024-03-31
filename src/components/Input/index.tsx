import { useState, forwardRef } from 'react'
import { useTheme } from '@/hooks/ThemeContext'

import Eye from '@/assets/icons/eye.svg?react'
import EyeSlash from '@/assets/icons/eye-slash.svg?react'

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'number' | 'text' | 'button' | 'date' | 'email' | 'password'
  placeholder?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, type, ...props }, ref) => {
  const { theme } = useTheme()
  const [passwordIsSaw, setPasswordIsSaw] = useState<boolean>(true)

  const handleShowPassword = () => {
    setPasswordIsSaw(state => !state)
  }

  const renderIcon = () => {
    if (type === 'password') {
      return passwordIsSaw ? <Eye onClick={handleShowPassword} /> : <EyeSlash onClick={handleShowPassword} />
    }
    return null
  }

  const typeInput = () => {
    return type === 'password' && !passwordIsSaw ? 'text' : type
  }

  return (
    <div className="inpt-container">
      <input
        role="input"
        type={typeInput()}
        placeholder={placeholder}
        className={`inpt inpt__${theme}`}
        ref={ref}
        {...props}
      />
      {renderIcon()}
    </div>
  )
})
