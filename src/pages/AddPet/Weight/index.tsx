import './styles.scss'

import { ChangeEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from '@/components/Input'
import { RadioButton } from '@/components/RadioButton'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'

import { FooterStep } from '../components/FooterStep'
import { PhotoPet } from '../components/PhotoPet'

export function Weight() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  const [weight, setWeight] = useState<string>('')
  const [unit, setUnit] = useState<string>('kg/lb')
  const [kgWeight, setKgWeight] = useState<string>('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '')
    if (value.length > 0) {
      const numericValue = parseFloat(value) / 100
      const formattedValue = numericValue.toFixed(2)
      setWeight(formattedValue)
      setKgWeight(formattedValue)
    } else {
      setWeight('')
    }
  }

  const handleFocus = () => {
    if (inputRef.current) {
      const length = inputRef.current.value.length
      inputRef.current.setSelectionRange(length, length)
    }
  }

  const handleChooseUnit = (unit: string) => {
    setUnit(unit)

    if (unit === 'kg') {
      setWeight(kgWeight)
    } else {
      const value = parseFloat(weight) / 2.20462
      setWeight(value.toFixed(2))
    }
  }

  return (
    <div className="weight-page">
      <div>
        <PhotoPet />
      </div>
      <div className="weight-page weight-page__title">
        <Subtitle size="1" type="regular" centered>
          {t('dashboard.add_pet.weight_page.title')}
        </Subtitle>
        <Subtitle size="2" type="regular" centered>
          {t('dashboard.add_pet.weight_page.description')}
        </Subtitle>
      </div>
      <div className={`weight-page weight-page__result weight-page__result__${theme}`}>
        <h1>
          {weight} {unit}
        </h1>
      </div>
      <div className="weight-page__fields">
        <Input
          type="text"
          placeholder="0.00"
          value={weight}
          ref={inputRef}
          onFocus={handleFocus}
          onChange={handleWeightChange}
        />
        <RadioButton id="kg" label="kg" choose={() => handleChooseUnit('kg')} />
        <RadioButton id="lb" label="lb" choose={() => handleChooseUnit('lb')} />
      </div>
      <FooterStep />
    </div>
  )
}
