import { useTheme } from '@/hooks/ThemeContext'

export function PetProfileLayout() {
  const { theme } = useTheme()
  return <div className={`dashboard-panel dashboard-panel__${theme}`}>Pet Profile</div>
}
