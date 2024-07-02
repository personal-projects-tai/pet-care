import './styles.scss'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import SizeLarge from '@/assets/icons/size-large.svg?react'
import SizeMedium from '@/assets/icons/size-medium.svg?react'
import SizeSmall from '@/assets/icons/size-small.svg?react'
import { useTheme } from '@/hooks/ThemeContext'

type IconType = 'small' | 'medium' | 'large'

interface Props {
  icon: IconType
  id: number
}

export function SizeCard({ icon, id }: Props) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  function renderIcon() {
    const iconMap = {
      small: <SizeSmall />,
      medium: <SizeMedium />,
      large: <SizeLarge />
    }

    return iconMap[icon]
  }

  function renderSize() {
    const sizeMap = {
      small: t('dashboard.add_pet.size_page.sizes.small.title'),
      medium: t('dashboard.add_pet.size_page.sizes.medium.title'),
      large: t('dashboard.add_pet.size_page.sizes.large.title')
    }

    return sizeMap[icon]
  }

  function renderSizeDescription() {
    const descriptionMap = {
      small: t('dashboard.add_pet.size_page.sizes.small.description'),
      medium: t('dashboard.add_pet.size_page.sizes.medium.description'),
      large: t('dashboard.add_pet.size_page.sizes.large.description')
    }

    return descriptionMap[icon]
  }

  function handleSelectBreed(id: number) {
    const prevSelected = document.querySelector('.size-card.selected')

    if (prevSelected) {
      prevSelected.classList.remove('selected')
    }

    const clickedCard = document.getElementById(id.toString())
    clickedCard?.classList.add('selected')
  }

  function handleOutsideClick(event: MouseEvent) {
    const prevSelected = document.querySelector('.size-card.selected')
    if (!(event.target as HTMLElement).closest('.size-card')) {
      prevSelected?.classList.remove('selected')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div
      className={`size-card size-card__${icon} size-card__${theme}`}
      id={id.toString()}
      onClick={() => handleSelectBreed(id)}
    >
      <div className={`size-card__icon size-card__icon__${theme} size-card__icon__${icon}`}>{renderIcon()}</div>
      <div className={`size-card__info size-card__info__${theme} size-card__info__${icon}`}>
        <h4>{renderSize()}</h4>
        <p>{renderSizeDescription()}</p>
      </div>
    </div>
  )
}
