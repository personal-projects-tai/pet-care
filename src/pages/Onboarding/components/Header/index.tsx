import './styles.scss'
import logo from '@/assets/images/logo.png'

export function Header() {
  return (
    <header role="heading" className="onboarding-header">
      <img src={logo} alt="Logo Paw Buddy" />
    </header>
  )
}
