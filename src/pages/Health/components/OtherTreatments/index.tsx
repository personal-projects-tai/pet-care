import './styles.scss'

import { useTranslation } from 'react-i18next'

import PlusIcon from '@/assets/icons/plus.svg?react'
import EmptyOtherTreatments from '@/assets/images/empty-other-treatments.svg?react'
import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { Tag } from '@/components/Tag'
import { useTheme } from '@/hooks/ThemeContext'

type TreatmentType = 'hygiene' | 'physical' | 'beauty' | 'diet' | 'other'

export interface OtherTreatmentsType {
  type: TreatmentType
  title: string
  description: string
}

interface OtherTreatmentsProps {
  otherTreatments: OtherTreatmentsType[]
}

export function OtherTreatments({ otherTreatments }: OtherTreatmentsProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  function renderTag(tag: TreatmentType) {
    switch (tag) {
      case 'hygiene':
        return t('pet_profile.health_card_section.options.other_treatments.type.hygiene')
      case 'physical':
        return t('pet_profile.health_card_section.options.other_treatments.type.physical')
      case 'beauty':
        return t('pet_profile.health_card_section.options.other_treatments.type.beauty')
      case 'diet':
        return t('pet_profile.health_card_section.options.other_treatments.type.diet')
      case 'other':
        return t('pet_profile.health_card_section.options.other_treatments.type.other')
      default:
        return ''
    }
  }

  return (
    <div className="treatments">
      {otherTreatments.length <= 0 ? (
        <div className="treatments__empty">
          <EmptyOtherTreatments />
          <Subtitle size="3" type="semibold" centered>
            {t('pet_profile.health_card_section.options.other_treatments.no_other_treatments.title')}
          </Subtitle>
          <Button size="md" variant="primary">
            {t('pet_profile.health_card_section.options.other_treatments.no_other_treatments.actions.add')}
          </Button>
        </div>
      ) : (
        <div className="treatments__list">
          <header className={`treatments__list__add treatments__list__add__${theme}`}>
            <button>
              <PlusIcon />
              <span>
                {t('pet_profile.health_card_section.options.medical_intervetions.no_interventions.actions.add')}
              </span>
            </button>
          </header>
          {otherTreatments.map((item, index) => {
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
