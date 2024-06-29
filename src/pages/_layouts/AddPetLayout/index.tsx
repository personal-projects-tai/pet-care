import './styles.scss'
import '../../shared/dashboard-panel.scss'

import { Outlet } from 'react-router'
import { useTheme } from '@/hooks/ThemeContext'
import { AddPetMenu } from '@/components/AddPetMenu'
import { StepsProvider } from '@/hooks/StepsContext'

export function AddPetLayout() {
  const { theme } = useTheme()

  return (
    <div className={`dashboard-panel dashboard-panel__${theme}`}>
      <StepsProvider>
        <AddPetMenu />
        <div className="container-add-pet">
          <Outlet />
        </div>
      </StepsProvider>
    </div>
  )
}
