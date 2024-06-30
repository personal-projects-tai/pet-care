import './styles.scss'

import logo from '@/assets/images/logo.svg'
import logoLight from '@/assets/images/logo-light.svg'
import { useTheme } from '@/hooks/ThemeContext'
import { router } from '@/router'

export function Header() {
  const { theme } = useTheme()

  const DEFAULT_THEME = 'light'

  const handleRedirectToHome = () => {
    router.navigate('/')
  }
  return (
    <header role="heading" className="onboarding-header">
      <img src={theme === DEFAULT_THEME ? logoLight : logo} alt="Logo Paw Buddy" onClick={handleRedirectToHome} />
    </header>
  )
}
