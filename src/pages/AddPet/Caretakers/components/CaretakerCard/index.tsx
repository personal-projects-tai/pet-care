import './styles.scss'

import Minus from '@/assets/icons/minus.svg?react'
import { Avatar } from '@/components/Avatar'
import { useTheme } from '@/hooks/ThemeContext'

interface CaretakerCard {
  isMinusActive?: boolean
}

export function CaretakerCard({ isMinusActive }: CaretakerCard) {
  const { theme } = useTheme()
  return (
    <div className={`caretaker-card caretaker-card__${theme}`}>
      <Avatar username="Taiza Marques" />
      <div className={`caretaker-card__info caretaker-card__info__${theme}`}>
        <p className="username">Taiza Marques</p>
        <p className="mail">taiza.marques@mail.com</p>
      </div>
      {isMinusActive && <Minus />}
    </div>
  )
}
