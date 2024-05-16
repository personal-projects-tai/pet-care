import { Heading } from '../Heading'

import ArrowLeft from '@/assets/icons/arrow-left.svg?react'

import './styles.scss'
import { Subtitle } from '../Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { useTranslation } from 'react-i18next'

interface Props {
  title: string
  page: string
}

export function AddPetMenu({ title, page }: Props) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className="add-pet-menu">
      <div className={`add-pet-menu__items add-pet-menu__items__${theme}`}>
        <ArrowLeft />
        <span className="add-pet-menu__title">
          <Heading type="3">{title}</Heading>
          <Subtitle type="regular" size="3" centered>
            {page}
          </Subtitle>
        </span>
        <Subtitle type="regular" size="3">
          {t('dashboard.add_pet.menu.step')}
          <p>1/8</p>
        </Subtitle>
      </div>
      <div className={`add-pet-menu__progress-bar add-pet-menu__progress-bar__${theme}`}>
        <div className="add-pet-menu__progress-bar-inner"></div>
      </div>
    </div>
  )
}
