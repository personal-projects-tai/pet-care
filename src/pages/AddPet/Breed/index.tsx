import './styles.scss'

import { useTranslation } from 'react-i18next'

import MagnifyingGlass from '@/assets/icons/magnifying-glass.svg?react'
import { Heading } from '@/components/Heading'
import { Input } from '@/components/Input'
import { Subtitle } from '@/components/Subtitle'

import { FooterStep } from '../components/FooterStep'
import { BreedCard } from './components/BreedCard'

const pets = [
  {
    id: 1,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 2,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 3,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 4,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 5,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 6,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 7,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 8,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 9,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  },
  {
    id: 10,
    breed: 'Mixed Breed',
    image: '/breeds/akita.png'
  }
]

export function Breed() {
  const { t } = useTranslation()

  return (
    <div className="breed-page">
      <header>
        <div className="info">
          <Heading type="3">{t('dashboard.add_pet.breed_page.title')}</Heading>
          <Subtitle size="3" type="regular">
            {t('dashboard.add_pet.breed_page.description')}
          </Subtitle>
        </div>
        <div className="search">
          <Input type="text" placeholder={t('dashboard.add_pet.breed_page.search_breed')} />
          <MagnifyingGlass />
        </div>
      </header>
      <section className="breed-list">
        {pets.map(pet => (
          <BreedCard key={pet.id} breed={pet.breed} id={pet.id} image={pet.image} />
        ))}
      </section>
      <FooterStep />
    </div>
  )
}
