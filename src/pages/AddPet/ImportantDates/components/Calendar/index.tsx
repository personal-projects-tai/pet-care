import './styles.scss'

import Calendar from 'react-calendar'
import { useTranslation } from 'react-i18next'

import ChevronLeft from '@/assets/icons/chevron-left.svg?react'
import ChevronRight from '@/assets/icons/chevron-right.svg?react'
import { useTheme } from '@/hooks/ThemeContext'

export function CalendarPicker() {
  const { theme } = useTheme()
  const { i18n } = useTranslation()

  const currentDate = new Date()
  const currentLanguage = i18n.language

  return (
    <Calendar
      prevLabel={<ChevronLeft />}
      nextLabel={<ChevronRight />}
      locale={currentLanguage}
      maxDate={currentDate}
      className={theme}
    />
  )
}
