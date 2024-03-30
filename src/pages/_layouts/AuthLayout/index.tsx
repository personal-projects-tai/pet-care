import { Outlet } from 'react-router'
import { Header } from './components/Header'
import './styles.scss'

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
