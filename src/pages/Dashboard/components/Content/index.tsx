import { Card } from '../Card'
import { Heading } from '@/components/Heading'
import { useTheme } from '@/hooks/ThemeContext'
import { Subtitle } from '@/components/Subtitle'
import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel, { SlideProps } from '../Carousel'
import ImageHealthCard from '@/assets/images/health_card.png'
import ImageNutritionCard from '@/assets/images/nutrition_card.png'
import ImageActivitiesCard from '@/assets/images/activities_card.png'

import './styles.scss'
import '@/pages/Dashboard/components/Carousel/embla.scss'

export function Content() {
  const { theme } = useTheme()

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
          <Heading type="2">Active pet profiles</Heading>
          <span>3</span>
        </div>
        <p>See all your pets and information</p>
      </header>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <section className="cards">
        <Card>
          <div className="card__info">
            <Heading type="3">Health</Heading>
            <Subtitle type="regular" size="3">
              Keep up with appointments and all your pet's medical history in one place
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
              <Heading type="3">Nutrition</Heading>
              <Subtitle type="regular" size="3">
                Track your pet's meals and entire food history in one place
              </Subtitle>
            </div>
          </Card>
          <Card>
            <div className="card__image__secondary">
              <img src={ImageActivitiesCard} alt="Activities Card Pet" />
            </div>
            <div className="card__info">
              <Heading type="3">Activities</Heading>
              <Subtitle type="regular" size="3">
                Track your pet's physical activities and entire physical history in one place
              </Subtitle>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
