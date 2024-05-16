import './styles.scss'
import '../../shared/dashboard-panel.scss'

import { Outlet } from 'react-router'
import { useTheme } from '@/hooks/ThemeContext'
import { AddPetMenu } from '@/components/AddPetMenu'
import { useTranslation } from 'react-i18next'

export function AddPetLayout() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className={`dashboard-panel dashboard-panel__${theme}`}>
      <AddPetMenu title={t('dashboard.add_pet.menu.title')} page={t('dashboard.add_pet.menu.type.breed')} />
      <div className="container-add-pet">
        <Outlet />
      </div>
    </div>
  )
}
