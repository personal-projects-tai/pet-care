import './styles.scss'

import { Outlet } from 'react-router'

import { SideMenu } from '@/components/SideMenu'

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
