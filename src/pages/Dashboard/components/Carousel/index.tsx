import { useCallback, useEffect, useRef } from 'react'
import { EmblaCarouselType, EmblaEventType, EmblaOptionsType } from 'embla-carousel'
import { DotButton, NextButton, PrevButton, useDotButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'

import useEmblaCarousel from 'embla-carousel-react'
import MaleGender from '@/assets/icons/male-gender.svg?react'
import FemaleGender from '@/assets/icons/female-gender.svg?react'

const TWEEN_FACTOR_BASE = 0.15

const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max)

export interface SlideProps {
  name: string
  image: string
  gender: 'male' | 'female'
  breed: string
  description: string
  species: string
}

type PropType = {
  slides: SlideProps[]
  options?: EmblaOptionsType
}

export function EmblaCarousel({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map(slideNode => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach(slideIndex => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach(loopItem => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi.on('reInit', setTweenNodes).on('reInit', setTweenFactor).on('reInit', tweenScale).on('scroll', tweenScale)
  }, [emblaApi, setTweenFactor, setTweenNodes, tweenScale])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className={`embla__slide__number ${slide.gender}`}>
                <div className="content-carousel">
                  <div className="content-carousel__side-info">
                    <div className="gender">{slide.gender === 'male' ? <MaleGender /> : <FemaleGender />}</div>
                    <div className="name">
                      <h1>{slide.name}</h1>
                      <p>
                        {slide.species} | {slide.breed}
                      </p>
                    </div>
                    <p className="description">{slide.description}</p>
                  </div>
                  <div className="content-carousel__side-image">
                    <div className="outer-circle">
                      <div className="middle-circle">
                        <div className="inner-circle">
                          <img src={`/breeds/${slide.image}.png`} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
