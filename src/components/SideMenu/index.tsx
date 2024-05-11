import './styles.scss'

import Apps from '@/assets/icons/apps.svg?react'
import Gear from '@/assets/icons/gear.svg?react'
import Plus from '@/assets/icons/plus.svg?react'
import logo from '@/assets/images/logo-logged.svg'
import Close from '@/assets/icons/close.svg?react'
import User from '@/assets/icons/user-account.svg?react'
import Calendar from '@/assets/icons/calendar.svg?react'
import ChartBubbles from '@/assets/icons/chart-bubbles.svg?react'
import ArrowRightFromBracket from '@/assets/icons/arrow-right-from-bracket.svg?react'

import { useSidebar } from '@/hooks/DashboardSidebarContext'

export function SideMenu() {
  const { toggleIsOpen, isOpen } = useSidebar()
  return (
    <div role="menu" className={`sidemenu ${isOpen ? 'open' : 'close'}`}>
      <div className="sidebar-content">
        <Close className="ic-close" onClick={toggleIsOpen} />
        <header>
          <img src={logo} alt="Logo Paw Buddy" />
        </header>
        <div className="divider"></div>
        <section className="sidemenu__pets">
          <span>Your Pets</span>
          <div className="add_new">
            <button className="btn">
              <Plus />
            </button>
            <span>Add new</span>
          </div>
        </section>
        <div className="divider"></div>
        <nav className="sidemenu__menu">
          <ul>
            <li>
              <Apps />
              <span>Dashboard</span>
            </li>
            <li>
              <ChartBubbles />
              <span>Contacts</span>
            </li>
            <li>
              <Calendar />
              <span>Calendar</span>
            </li>
          </ul>
        </nav>
        <div className="divider"></div>
        <nav className="sidemenu__menu">
          <ul>
            <li>
              <User />
              <span>Account</span>
            </li>
            <li>
              <Gear />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
        <div className="sidemenu__user-info">
          <div className="avatar">
            <User />
          </div>
          <div className="info">
            <span>Hello</span>
            <span className="user-name">Esther</span>
          </div>
          <ArrowRightFromBracket />
        </div>
      </div>
    </div>
  )
}
