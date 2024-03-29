import { useTheme } from '@/hooks/ThemeContext'
import './styles.scss'
import logo from '@/assets/images/logo.png'
import logoLight from '@/assets/images/logo-light.png'

export function Header() {
  const { theme } = useTheme()

  const DEFAULT_THEME = 'light'
  return (
    <header role="heading" className="onboarding-header">
      <img src={theme === DEFAULT_THEME ? logoLight : logo} alt="Logo Paw Buddy" />
    </header>
  )
}
