import './styles.scss'

import { useTranslation } from 'react-i18next'

import Cake from '@/assets/icons/cake.svg?react'
import Home from '@/assets/icons/home.svg?react'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { KindType, useSelectionDate } from '@/hooks/SelectionDateContext'
import { useTheme } from '@/hooks/ThemeContext'

import { FooterStep } from '../components/FooterStep'
import { PhotoPet } from '../components/PhotoPet'
import { SideMenuCalendar } from './components/SideMenuCalendar'

export function ImportantDates() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { selectKind } = useSelectionDate()

  function handleOpenCalendar(selectedKind: KindType) {
    const sideMenuCalendar = document.getElementById('calendar-side-menu') as HTMLElement
    sideMenuCalendar.classList.add('open')

    selectKind(selectedKind)
  }

  return (
    <div className={`important-dates-page important-dates-page__${theme}`}>
      <SideMenuCalendar />
      <div>
        <PhotoPet />
      </div>
      <div className="important-dates-page important-dates-page__title">
        <Subtitle size="1" type="regular" centered>
          {t('dashboard.add_pet.important_dates_page.title')}
        </Subtitle>
        <Subtitle size="2" type="regular" centered>
          {t('dashboard.add_pet.important_dates_page.description')}
        </Subtitle>
      </div>
      <div className="important-dates-page__actions">
        <Button size="lg" variant="outlined" onClick={() => handleOpenCalendar('birthdate')}>
          <Cake />
          {t('dashboard.add_pet.important_dates_page.actions.add_birthdate')}
        </Button>
        <Button size="lg" variant="outlined" onClick={() => handleOpenCalendar('adoption_date')}>
          <Home />
          {t('dashboard.add_pet.important_dates_page.actions.add_adoption')}
        </Button>
      </div>

      <FooterStep />
    </div>
  )
}
