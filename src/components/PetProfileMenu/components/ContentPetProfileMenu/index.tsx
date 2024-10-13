import { useTranslation } from 'react-i18next'

import CakeIcon from '@/assets/icons/cake.svg?react'
import HomeIcon from '@/assets/icons/home.svg?react'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { CaretakerCard } from '@/pages/AddPet/Caretakers/components/CaretakerCard'

export function ContentPetProfileMenu() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <div>
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
          <div>
            <span>
              <CakeIcon />
            </span>
            <div className="info">
              <Subtitle size="3" type="regular">
                {t('pet_profile.profile_menu.information.important_dates.birthday')}
              </Subtitle>
              <p>3, {t('utils.months.nov')}, 2019 </p>
            </div>
          </div>
          <div className="age">
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
          <div className="info">
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
