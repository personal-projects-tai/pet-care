import './styles.scss'

import { useTranslation } from 'react-i18next'

import CalendarDateIcon from '@/assets/icons/calendar-date.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import EmptyVaccines from '@/assets/images/empty-vaccines.svg?react'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { formatDate } from '@/utils/formatDate'

interface Vaccine {
  dateApplication: Date
  title: string
  doctorApplied: string
}

interface VaccinesProps {
  vaccines: Vaccine[]
}

export function Vaccines({ vaccines }: VaccinesProps) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className="vaccines">
      {vaccines.length <= 0 ? (
        <div className="vaccines__empty">
          <EmptyVaccines />
          <Subtitle size="3" type="semibold" centered>
            {t('pet_profile.health_card_section.options.vaccines.no_vacines.title')}
          </Subtitle>
          <Button size="md" variant="primary">
            {t('pet_profile.health_card_section.options.vaccines.no_vacines.actions.add')}
          </Button>
        </div>
      ) : (
        <div className="vaccines__list">
          <header className={`vaccines__list__add vaccines__list__add__${theme}`}>
            <button>
              <PlusIcon />
              <span>{t('pet_profile.health_card_section.options.vaccines.no_vacines.actions.add')}</span>
            </button>
          </header>
          {vaccines.map((item, index) => {
            return (
              <div key={index} className={`vaccines__list__item vaccines__list__item__${theme}`}>
                <Subtitle size="3" type="semibold">
                  {item.title}
                </Subtitle>
                <div className="vaccines__list__item__side">
                  <div className={`vaccines__list__item__date vaccines__list__item__date__${theme}`}>
                    <CalendarDateIcon />
                    <p>{formatDate(item.dateApplication)}</p>
                  </div>
                  <div className={`vaccines__list__item__doctor vaccines__list__item__doctor__${theme}`}>
                    <p>{item.doctorApplied}</p>
                    <Avatar username={item.doctorApplied} size="small" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
