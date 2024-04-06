import { SideMenu } from '@/components/SideMenu'
import { Outlet } from 'react-router'

import './styles.scss'
// import { useSidebar } from '@/hooks/DashboardSidebarContext'

export function DashboardLayout() {
  // const { isOpen } = useSidebar()
  return (
    <main className="dashboard">
      <SideMenu />
      <main>
        <Outlet />
      </main>
    </main>
  )
}
