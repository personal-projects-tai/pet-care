import { Heading } from '@/components/Heading'
import { useTheme } from '@/hooks/ThemeContext'

import './styles.scss'
import { useEffect } from 'react'

interface Props {
  id: number
  breed: string
  image: string
}

export function BreedCard({ id, breed, image }: Props) {
  const { theme } = useTheme()

  function handleSelectBreed(id: number) {
    const prevSelected = document.querySelector('.breed-card.selected')

    if (prevSelected) {
      prevSelected.classList.remove('selected')
    }

    const clickedCard = document.getElementById(id.toString())
    clickedCard?.classList.add('selected')
  }

  function handleOutsideClick(event: MouseEvent) {
    const prevSelected = document.querySelector('.breed-card.selected')
    if (!(event.target as HTMLElement).closest('.breed-card')) {
      prevSelected?.classList.remove('selected')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className={`breed-card breed-card__${theme}`} id={id.toString()} onClick={() => handleSelectBreed(id)}>
      <Heading type="3">{breed}</Heading>
      <div className={`breed-card__image breed-card__image__${theme}`}>
        <div className="outer-circle">
          <div className="inner-circle">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
