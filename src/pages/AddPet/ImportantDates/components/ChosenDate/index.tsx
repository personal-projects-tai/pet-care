import './styles.scss'

import { useTranslation } from 'react-i18next'

import Cake from '@/assets/icons/cake.svg?react'
import Home from '@/assets/icons/home.svg?react'
import { KindType } from '@/hooks/SelectionDateContext'
import { useTheme } from '@/hooks/ThemeContext'

interface Props {
  kindOfDate: KindType
}

export function ChosenDate({ kindOfDate }: Props) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className={`chosen-date chosen-date__${theme}`}>
      {kindOfDate === 'birthdate' ? (
        <div className={`chosen-date chosen-date__icon chosen-date__icon__${theme}`}>
          <Cake />
        </div>
      ) : (
        <div className={`chosen-date chosen-date__icon chosen-date__icon__${theme}`}>
          <Home />
        </div>
      )}
      <div className={`chosen-date__info chosen-date__info`}>
        <span className={`chosen-date__info__title chosen-date__info__title__${theme}`}>
          {kindOfDate === 'birthdate'
            ? t('dashboard.add_pet.important_dates_page.calendar.menu_options.birthdate')
            : t('dashboard.add_pet.important_dates_page.calendar.menu_options.adoption')}
        </span>
        <span className={`chosen-date__info__date chosen-date__info__date__${theme}`}>16 abr 2023</span>
      </div>
      {kindOfDate === 'birthdate' && (
        <svg
          className="vertical-divider"
          width="1"
          height="50"
          viewBox="0 0 1 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" x2="0.5" y2="50" stroke="currentColor" />
        </svg>
      )}
      {kindOfDate === 'birthdate' && (
        <div className={`chosen-date__age chosen-date__age__${theme}`}>
          <h4>3</h4>
          <span>{t('dashboard.add_pet.important_dates_page.age.years_old')}</span>
        </div>
      )}
    </div>
  )
}
