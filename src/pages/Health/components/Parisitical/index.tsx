import './styles.scss'

import { useTranslation } from 'react-i18next'

import CalendarDateIcon from '@/assets/icons/calendar-date.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import EmptyVaccines from '@/assets/images/empty-vaccines.svg?react'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { formatDate } from '@/utils/formatDate'

interface ParisiticalType {
  dateApplied: Date
  title: string
}

interface ParisiticalProps {
  parisiticals: ParisiticalType[]
}

export function Parisitical({ parisiticals }: ParisiticalProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className="parisitical">
      {parisiticals.length <= 0 ? (
        <div className="parisitical__empty">
          <EmptyVaccines />
          <Subtitle size="3" type="semibold" centered>
            {t('pet_profile.health_card_section.options.treatments.no_treatments.title')}
          </Subtitle>
          <Button size="md" variant="primary">
            {t('pet_profile.health_card_section.options.treatments.no_treatments.actions.add')}
          </Button>
        </div>
      ) : (
        <div className="parisitical__list">
          <header className={`parisitical__list__add parisitical__list__add__${theme}`}>
            <button>
              <PlusIcon />
              <span>{t('pet_profile.health_card_section.options.treatments.no_treatments.actions.add')}</span>
            </button>
          </header>
          {parisiticals.map((item, index) => {
            return (
              <div key={index} className={`parisitical__list__item parisitical__list__item__${theme}`}>
                <Subtitle size="3" type="semibold">
                  {item.title}
                </Subtitle>
                <div className="parisitical__list__item__side">
                  <div className={`parisitical__list__item__date parisitical__list__item__date__${theme}`}>
                    <CalendarDateIcon />
                    <p>{formatDate(item.dateApplied)}</p>
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
