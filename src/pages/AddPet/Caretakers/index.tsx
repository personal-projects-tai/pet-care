import './styles.scss'

import { useTranslation } from 'react-i18next'

// import Plus from '@/assets/icons/plus.svg?react'
// import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'

import { PhotoPet } from '../components/PhotoPet'
import { CaretakerCard } from './components/CaretakerCard'

export function Caretakers() {
  const { t } = useTranslation()
  return (
    <div className="caretakers-page">
      <PhotoPet />
      {/* <div className='caretakers-page__actions'>
				<Button size="lg" variant="outlined">
					<Plus />
					{t('dashboard.add_pet.caretakers_page.actions.add_caretaker')}
				</Button>
			</div> */}
      <div className="caretakers-page__caretakers">
        <Subtitle size="2" type="semibold">
          {t('dashboard.add_pet.caretakers_page.title')}
        </Subtitle>
        <div className="caretakers-page__caretakers__cards">
          <CaretakerCard isMinusActive />
          <CaretakerCard isMinusActive />
        </div>
      </div>
    </div>
  )
}
