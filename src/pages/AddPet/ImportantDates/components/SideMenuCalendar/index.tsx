import './styles.scss'

import { useTranslation } from 'react-i18next'

import Close from '@/assets/icons/close.svg?react'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { KindType, useSelectionDate } from '@/hooks/SelectionDateContext'
import { useTheme } from '@/hooks/ThemeContext'

import { CalendarPicker } from '../Calendar'

export function SideMenuCalendar() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { kind, selectKind } = useSelectionDate()

  function handleCloseCalendar() {
    const sideMenuCalendar = document.getElementById('calendar-side-menu') as HTMLElement
    sideMenuCalendar.classList.remove('open')
    sideMenuCalendar.classList.add('closing')

    sideMenuCalendar.addEventListener(
      'transitionend',
      () => {
        sideMenuCalendar.classList.remove('closing')
      },
      { once: true }
    )
  }

  function handleChangeKind(selectedKind: KindType) {
    selectKind(selectedKind)
  }

  return (
    <div id="calendar-side-menu" className={`side-menu-calendar side-menu-calendar__${theme}`}>
      <header>
        <Subtitle size="2" type="semibold">
          {t('dashboard.add_pet.important_dates_page.calendar.title')}
        </Subtitle>
        <Close onClick={handleCloseCalendar} />
      </header>
      <div className={`side-menu-calendar__menu-options side-menu-calendar__menu-options__${theme}`}>
        <button className={kind === 'birthdate' ? 'selected' : ''} onClick={() => handleChangeKind('birthdate')}>
          {t('dashboard.add_pet.important_dates_page.calendar.menu_options.birthdate')}
        </button>
        <button
          className={kind === 'adoption_date' ? 'selected' : ''}
          onClick={() => handleChangeKind('adoption_date')}
        >
          {t('dashboard.add_pet.important_dates_page.calendar.menu_options.adoption')}
        </button>
      </div>
      <div className="divider"></div>
      <div className="side-menu-calendar__calendar">
        <CalendarPicker />
        <Button size="lg" variant="primary">
          {t('dashboard.add_pet.important_dates_page.calendar.confirm')}
        </Button>
      </div>
    </div>
  )
}
