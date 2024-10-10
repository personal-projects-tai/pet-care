import './styles.scss'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'

import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import { useTheme } from '@/hooks/ThemeContext'
import { Health } from '@/pages/Health'
import { router } from '@/router'

import { Button } from '../Button'
import { Combobox } from '../Combobox'
import { Heading } from '../Heading'
import { Subtitle } from '../Subtitle'
import { Content } from './components/Content'
import { mobileTabs } from './constants'

export function PetProfileMenu() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const location = useLocation()

  const [selectedTab, setSelectedTab] = useState<string>('information')

  const options = [
    { label: 'Maxi', value: '/breeds/collie_border.png' },
    { label: 'Bella', value: '/breeds/akita.png' },
    { label: 'Charlie', value: '/breeds/akita.png' }
  ]

  function handleSelectTabType(id: string) {
    setSelectedTab(id)

    // router.navigate(route)
  }

  function handleBackToDashboard() {
    router.navigate('/dashboard')
  }

  function renderMobileComponents() {
    if (selectedTab === 'information') {
      return <Content />
    }

    if (selectedTab === 'health') {
      return <Health />
    }

    return <Content />
  }

  useEffect(() => {
    const path = location.pathname.split('/')
    const tab = path[path.length - 1]

    if (tab === 'pet-profile') {
      setSelectedTab('information')
      return
    }

    setSelectedTab(tab)
  }, [location])

  return (
    <div className={`pet-profile-menu pet-profile-menu__${theme}`}>
      <nav className={`pet-profile-menu pet-profile-menu__mobile pet-profile-menu__mobile__${theme}`}>
        <div>
          <ArrowLeftIcon onClick={handleBackToDashboard} />
          <div className="mobile-divider"></div>
          <Heading type="2">{t('pet_profile.profile_menu.title')}</Heading>
        </div>
        <Combobox options={options} selectedOption={options[0]} />
      </nav>
      <div className={`pet-profile-menu__tab-mobile pet-profile-menu__tab-mobile__${theme}`}>
        {mobileTabs.map((tab, index) => {
          return (
            <button
              key={index}
              id={tab.id}
              className={tab.id === selectedTab ? 'selected' : ''}
              onClick={() => handleSelectTabType(tab.id)}
            >
              {t(tab.text)}
            </button>
          )
        })}
      </div>
      <nav className={`pet-profile-menu pet-profile-menu__desktop pet-profile-menu__desktop__${theme}`}>
        <Heading type="1">{t('pet_profile.profile_menu.title')}</Heading>
      </nav>
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
      {renderMobileComponents()}
    </div>
  )
}
