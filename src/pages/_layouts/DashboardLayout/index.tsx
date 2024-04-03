import { Outlet } from 'react-router'

export function DashboardLayout() {
  return (
    <>
      <div>Side menu</div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
