import './styles.scss'

import { useTranslation } from 'react-i18next'

// import CalendarDateIcon from '@/assets/icons/calendar-date.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import EmptyInterventions from '@/assets/images/empty-medical-interventions.svg?react'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { Tag } from '@/components/Tag'
import { useTheme } from '@/hooks/ThemeContext'

type MedicalInterventionsType = 'exam' | 'medication' | 'consultation' | 'surgery' | 'other'

interface MedicalInterventions {
  type: MedicalInterventionsType
  title: string
  dateApplied: Date
}

interface MedicalInterventionsProps {
  interventions: MedicalInterventions[]
}

export function MedicalInterventions({ interventions }: MedicalInterventionsProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  function renderTag(tag: MedicalInterventionsType) {
    switch (tag) {
      case 'exam':
        return t('pet_profile.health_card_section.options.medical_intervetions.type.exam')
      case 'medication':
        return t('pet_profile.health_card_section.options.medical_intervetions.type.medication')
      case 'consultation':
        return t('pet_profile.health_card_section.options.medical_intervetions.type.consultation')
      case 'surgery':
        return t('pet_profile.health_card_section.options.medical_intervetions.type.surgery')
      case 'other':
        return t('pet_profile.health_card_section.options.medical_intervetions.type.other')
      default:
        return ''
    }
  }

  return (
    <div className="interventions">
      {interventions.length <= 0 ? (
        <div className="interventions__empty">
          <EmptyInterventions />
          <Subtitle size="3" type="semibold" centered>
            {t('pet_profile.health_card_section.options.medical_intervetions.no_interventions.title')}
          </Subtitle>
          <Button size="md" variant="primary">
            {t('pet_profile.health_card_section.options.medical_intervetions.no_interventions.actions.add')}
          </Button>
        </div>
      ) : (
        <div className="interventions__list">
          <header className={`interventions__list__add interventions__list__add__${theme}`}>
            <button>
              <PlusIcon />
              <span>
                {t('pet_profile.health_card_section.options.medical_intervetions.no_interventions.actions.add')}
              </span>
            </button>
          </header>
          {interventions.map((item, index) => {
            return (
              <div key={index} className={`interventions__list__item interventions__list__item__${theme}`}>
                <Subtitle size="3" type="semibold">
                  {item.title}
                </Subtitle>
                <div className="interventions__list__item__side">
                  <div className="interventions__list__item__tag">
                    <Tag type={item.type}>{renderTag(item.type)}</Tag>
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
