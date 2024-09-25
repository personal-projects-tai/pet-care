import './styles.scss'

import { Outlet } from 'react-router'

import { PetProfileMenu } from '@/components/PetProfileMenu'
import { useTheme } from '@/hooks/ThemeContext'

export function PetProfileLayout() {
  const { theme } = useTheme()
  return (
    <div className={`dashboard-panel dashboard-panel__${theme}`}>
      <div className="pet-profile">
        <PetProfileMenu />
        <Outlet />
      </div>
    </div>
  )
}
