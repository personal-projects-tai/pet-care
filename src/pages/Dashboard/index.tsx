import './styles.scss'

import User from '@/assets/icons/user.svg?react'
import MagnifyingGlass from '@/assets/icons/magnifying-glass.svg?react'
import Bars from '@/assets/icons/bars.svg?react'
import { Empty } from './components/Empty'
import { useSidebar } from '@/hooks/DashboardSidebarContext'

export function Dashboard() {
  const { toggleIsOpen } = useSidebar()
  return (
    <section className="dashboard-panel">
      <header className="header-mobile">
        <div className="header-mobile__user-info">
          <div>
            <div className="avatar">
              <User height={25} />
            </div>
            <div className="info">
              <span>Hello,</span>
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
      <Empty />
    </section>
  )
}
