import { PetProfileMenu } from '@/components/PetProfileMenu'
import { useTheme } from '@/hooks/ThemeContext'

export function PetProfileLayout() {
  const { theme } = useTheme()
  return (
    <div className={`dashboard-panel dashboard-panel__${theme}`}>
      <PetProfileMenu />
    </div>
  )
}
