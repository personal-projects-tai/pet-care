import './styles.scss'

import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'

import { PetProfileMenu } from '@/components/PetProfileMenu'
import { tabs } from '@/components/PetProfileMenu/constants'
import { useTheme } from '@/hooks/ThemeContext'
import { router } from '@/router'

export function PetProfileLayout() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  function handleSelectTabType(id: string, route: string) {
    const prevSelected = document.querySelector('.selected')

    if (prevSelected) {
      prevSelected.classList.remove('selected')
    }

    const clickedCard = document.getElementById(id)
    clickedCard?.classList.add('selected')

    router.navigate(route)
  }

  return (
    <div className={`dashboard-panel dashboard-panel__${theme}`}>
      <div className="pet-profile-desktop">
        <PetProfileMenu />
        <div className={`pet-profile-desktop__tabs pet-profile-desktop__tabs__${theme}`}>
          <nav>
            {tabs.map((tab, index) => {
              return (
                <button
                  key={index}
                  id={index.toString()}
                  className={index === 0 ? 'selected' : ''}
                  onClick={() => handleSelectTabType(index.toString(), tab.route || '')}
                >
                  {t(tab.text)}
                </button>
              )
            })}
          </nav>
          <Outlet />
        </div>
      </div>
      <div className="pet-profile-mobile">
        <PetProfileMenu />
      </div>
    </div>
  )
}
