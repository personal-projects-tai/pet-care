import './styles.scss'

import React, { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BandAidsIcon from '@/assets/icons/band-aids.svg?react'
import MinusIcon from '@/assets/icons/minus.svg?react'
import OtoscopeIcon from '@/assets/icons/otoscope.svg?react'
import PillsIcon from '@/assets/icons/pills.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import SyringeIcon from '@/assets/icons/syringe.svg?react'
import { useTheme } from '@/hooks/ThemeContext'

import { Heading } from '../Heading'

export type AccordionType = 'vaccines' | 'anti_parasitical_treatments' | 'medical_intervention' | 'other_treatments'

interface AccordionProps {
  title: AccordionType
  children: ReactNode
}

export function Accordion({ title, children }: AccordionProps) {
  const { theme } = useTheme()
  const { t } = useTranslation()

  function handleToggleAccordion() {
    setIsExpanded(!isExpanded)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleAccordion()
    }
  }

  function renderIconByTitle() {
    switch (title) {
      case 'vaccines':
        return <SyringeIcon />
      case 'anti_parasitical_treatments':
        return <PillsIcon />
      case 'medical_intervention':
        return <OtoscopeIcon />
      case 'other_treatments':
        return <BandAidsIcon />
      default:
        return <SyringeIcon />
    }
  }

  function renderTitle() {
    switch (title) {
      case 'vaccines':
        return t('pet_profile.health_card_section.options.vaccines.title')
      case 'anti_parasitical_treatments':
        return t('pet_profile.health_card_section.options.treatments.title')
      case 'medical_intervention':
        return t('pet_profile.health_card_section.options.medical_intervetions.title')
      case 'other_treatments':
        return t('pet_profile.health_card_section.options.other_treatments.title')
      default:
        return t('pet_profile.health_card_section.options.vaccines.title')
    }
  }

  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <div className={`accordion accordion__${theme} ${isExpanded ? 'expanded' : ''}`} onKeyDown={handleKeyDown}>
      <button
        className={`accordion__header accordion__header__${theme}`}
        role="button"
        aria-expanded={isExpanded}
        aria-controls="accordion-content"
        tabIndex={0}
        onClick={handleToggleAccordion}
      >
        <div className="accordion__header__title">
          <div className={`accordion__header__title__icon accordion__header__title__icon__${theme}`}>
            {renderIconByTitle()}
          </div>
          <Heading type="2">{renderTitle()}</Heading>
        </div>
        <span
          className="accordion__header__toggle-btn"
          aria-label={isExpanded ? 'Collapse accordion' : 'Expand accordion'}
        >
          {isExpanded ? <MinusIcon /> : <PlusIcon />}
        </span>
      </button>
      <div className="accordion__content" id="accordion-content">
        {children}
      </div>
    </div>
  )
}
