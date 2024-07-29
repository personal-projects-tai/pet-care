import './styles.scss'
import '@/pages/Dashboard/components/Carousel/embla.scss'

import { EmblaOptionsType } from 'embla-carousel'
import { useTranslation } from 'react-i18next'

import ImageActivitiesCard from '@/assets/images/activities_card.png'
import ImageHealthCard from '@/assets/images/health_card.png'
import ImageNutritionCard from '@/assets/images/nutrition_card.png'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'

import { Card } from '../Card'
import EmblaCarousel, { SlideProps } from '../Carousel'

export function Content() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES: SlideProps[] = [
    {
      name: 'Buddy',
      image: 'akita',
      gender: 'male',
      breed: 'Akita',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    },
    {
      name: 'Lilly',
      image: 'clumber',
      gender: 'female',
      breed: 'Clumber',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    },
    {
      name: 'Buddy',
      image: 'dingo',
      gender: 'male',
      breed: 'Dingo',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    },
    {
      name: 'Buddy',
      image: 'collie_border',
      gender: 'female',
      breed: 'Border Collie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    },
    {
      name: 'Buddy',
      image: 'bouvier',
      gender: 'female',
      breed: 'Bouvier',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    },
    {
      name: 'Buddy',
      image: 'corgi',
      gender: 'male',
      breed: 'Corgi',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      species: 'Dog'
    }
  ]
  return (
    <main className="content">
      <header className={`content__column content__column__${theme}`}>
        <div className={`content__header content__header__${theme}`}>
          <Heading type="2">{t('dashboard.homepage.title')}</Heading>
          <span>3</span>
        </div>
        <p>{t('dashboard.homepage.description')}</p>
      </header>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <section className="cards">
        <Card>
          <div className="card__info">
            <Heading type="3">{t('dashboard.homepage.health_card.title')}</Heading>
            <Subtitle type="regular" size="3">
              {t('dashboard.homepage.health_card.description')}
            </Subtitle>
          </div>
          <div className="card__image">
            <img src={ImageHealthCard} alt="Health Card Pet" />
          </div>
        </Card>
        <div className="both-cards">
          <Card>
            <div className="card__image__secondary">
              <img src={ImageNutritionCard} alt="Nutrition Card Pet" />
            </div>
            <div className="card__info">
              <Heading type="3">{t('dashboard.homepage.nutrition_card.title')}</Heading>
              <Subtitle type="regular" size="3">
                {t('dashboard.homepage.nutrition_card.description')}
              </Subtitle>
            </div>
          </Card>
          <Card>
            <div className="card__image__secondary">
              <img src={ImageActivitiesCard} alt="Activities Card Pet" />
            </div>
            <div className="card__info">
              <Heading type="3">{t('dashboard.homepage.activities_card.title')}</Heading>
              <Subtitle type="regular" size="3">
                {t('dashboard.homepage.activities_card.description')}
              </Subtitle>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
