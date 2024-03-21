import { Card } from './components/Card'
import { Header } from './components/Header'
import './styles.scss'

export type Props = {
  onboarding?: string
}

export function Onboarding() {
  return (
    <>
      <Header />
      <main role="main" className="onboarding">
        <Card />
      </main>
    </>
  )
}
