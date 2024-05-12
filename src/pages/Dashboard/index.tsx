import './styles.scss'

import User from '@/assets/icons/user.svg?react'
import MagnifyingGlass from '@/assets/icons/magnifying-glass.svg?react'
import Bars from '@/assets/icons/bars.svg?react'
import { useSidebar } from '@/hooks/DashboardSidebarContext'
import { Content } from './components/Content'
import { useTheme } from '@/hooks/ThemeContext'
import { useTranslation } from 'react-i18next'

export function Dashboard() {
  const { toggleIsOpen } = useSidebar()
  const { theme } = useTheme()
  const { t } = useTranslation()
  return (
    <section className={`dashboard-panel dashboard-panel__${theme}`}>
      <header className={`header-mobile header-mobile__${theme}`}>
        <div className={`header-mobile__user-info header-mobile__user-info__${theme}`}>
          <div>
            <div className="avatar">
              <User height={25} />
            </div>
            <div className={`info info__${theme}`}>
              <span>{t('dashboard.side_menu.hello')},</span>
              <span className="user-name">Esther</span>
            </div>
          </div>
          <div>
            <MagnifyingGlass />
            <div className="divisor"></div>
            <Bars onClick={toggleIsOpen} />
          </div>
        </div>
      </header>
      <Content />
    </section>
  )
}
