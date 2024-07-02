import './styles.scss'

import { useTranslation } from 'react-i18next'

import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'

import { FooterStep } from '../components/FooterStep'
import { SizeCard } from './components/SizeCard'

export function Size() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className="size-page">
      <div className={`size-page size-page__image size-page__image__${theme}`}>
        <div className="outer-circle">
          <div className="inner-circle">
            <img src="/breeds/akita.png" alt="" />
          </div>
        </div>
      </div>
      <div className="size-page size-page__title">
        <Subtitle size="1" type="regular" centered>
          {t('dashboard.add_pet.size_page.title')}
        </Subtitle>
        <Subtitle size="2" type="regular" centered>
          {t('dashboard.add_pet.size_page.description')}
        </Subtitle>
      </div>
      <div className="size-page__cards">
        <SizeCard icon="small" id={1} />
        <SizeCard icon="medium" id={2} />
        <SizeCard icon="large" id={3} />
      </div>
      <FooterStep />
    </div>
  )
}
