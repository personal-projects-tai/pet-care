import './styles.scss'

import Minus from '@/assets/icons/minus.svg?react'
import { useTheme } from '@/hooks/ThemeContext'
import { abbreviate } from '@/utils/abbreviationName'

export function CaretakerCard() {
  const { theme } = useTheme()
  return (
    <div className={`caretaker-card caretaker-card__${theme}`}>
      <div className={`caretaker-card__icon caretaker-card__icon__${theme}`}>{abbreviate('Taiza Marques')}</div>
      <div className={`caretaker-card__info caretaker-card__info__${theme}`}>
        <p className="username">Taiza Marques</p>
        <p className="mail">taiza.marques@mail.com</p>
      </div>
      <Minus />
    </div>
  )
}
