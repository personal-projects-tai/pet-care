import './styles.scss'

import { Outlet } from 'react-router'

import { Header } from './components/Header'

export function AuthLayout() {
  return (
    <>
      <Header />
      <main role="main" className="auth-layout">
        <Outlet />
      </main>
    </>
  )
}
