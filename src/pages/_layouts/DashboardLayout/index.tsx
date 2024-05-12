import { SideMenu } from '@/components/SideMenu'
import { Outlet } from 'react-router'

import './styles.scss'

export function DashboardLayout() {
  return (
    <main className="dashboard">
      <SideMenu />
      <main>
        <Outlet />
      </main>
    </main>
  )
}
