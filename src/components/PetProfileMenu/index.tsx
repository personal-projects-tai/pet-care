import './styles.scss'

import { useTranslation } from 'react-i18next'

import CakeIcon from '@/assets/icons/cake.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import HomeIcon from '@/assets/icons/home.svg?react'
import { useTheme } from '@/hooks/ThemeContext'
import { CaretakerCard } from '@/pages/AddPet/Caretakers/components/CaretakerCard'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Subtitle } from '../Subtitle'

export function PetProfileMenu() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div className={`pet-profile-menu pet-profile-menu__${theme}`}>
      <Heading type="1">{t('pet_profile.profile_menu.title')}</Heading>
      <header className="pet-profile-menu__header">
        <div className={`pet-profile-menu__header__avatar pet-profile-menu__header__avatar__${theme}`}>
          <img src="/breeds/collie_border.png" alt="" />
        </div>
        <div className="pet-profile-menu__header__pet">
          <div className={`pet-profile-menu__header__pet__name pet-profile-menu__header__pet__name__${theme}`}>
            <span>Maxi</span>
            <Button size="sm" variant="outlined">
              <EditIcon />
            </Button>
          </div>
          <div className="pet-profile-menu__header__pet__breed">
            <Subtitle size="3" type="regular">
              Dog
            </Subtitle>
            <div className="pet-divider"></div>
            <Subtitle size="3" type="regular">
              Border Collie
            </Subtitle>
          </div>
        </div>
      </header>
      <section className="pet-profile-menu__appearance">
        <Heading type="3">{t('pet_profile.profile_menu.information.general.title')}</Heading>
        <Subtitle size="3" type="regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae in numquam assumenda unde
          incidunt velit. Veritatis, dicta dignissimos!
        </Subtitle>
        <div className={`pet-profile-menu__appearance__table pet-profile-menu__appearance__table__${theme}`}>
          <span>
            <Subtitle size="3" type="regular">
              {t('pet_profile.profile_menu.information.general.gender')}
            </Subtitle>
            <p>Macho</p>
          </span>
          <span>
            <Subtitle size="3" type="regular">
              {t('pet_profile.profile_menu.information.general.size')}
            </Subtitle>
            <p>Médio</p>
          </span>
          <span>
            <Subtitle size="3" type="regular">
              {t('pet_profile.profile_menu.information.general.weight')}
            </Subtitle>
            <p>22,2 kg</p>
          </span>
        </div>
      </section>
      <section className="pet-profile-menu__important-dates">
        <Heading type="3">{t('pet_profile.profile_menu.information.important_dates.title')}</Heading>
        <div
          className={`pet-profile-menu__important-dates__birthday pet-profile-menu__important-dates__birthday__${theme}`}
        >
          <div className="birthday">
            <span>
              <CakeIcon />
            </span>
            <div>
              <Subtitle size="3" type="regular">
                {t('pet_profile.profile_menu.information.important_dates.birthday')}
              </Subtitle>
              <p>3, {t('utils.months.nov')}, 2019 </p>
            </div>
          </div>
          <div>
            <p>3 {t('pet_profile.profile_menu.information.important_dates.age.years_old')}</p>
          </div>
        </div>
        <div className={`pet-profile-menu__divider pet-profile-menu__divider__${theme}`}></div>
        <div
          className={`pet-profile-menu__important-dates__adoption pet-profile-menu__important-dates__adoption__${theme}`}
        >
          <span>
            <HomeIcon />
          </span>
          <div>
            <Subtitle size="3" type="regular">
              {t('pet_profile.profile_menu.information.important_dates.adoption_day')}
            </Subtitle>
            <p>3, {t('utils.months.nov')}, 2019 </p>
          </div>
        </div>
      </section>
      <section className={`pet-profile-menu__caretakers`}>
        <Heading type="3">{t('pet_profile.profile_menu.information.caretakers.title')}</Heading>
        <CaretakerCard />
        <div className={`pet-profile-menu__divider pet-profile-menu__divider__${theme}`}></div>
        <CaretakerCard />
      </section>
    </div>
  )
}
