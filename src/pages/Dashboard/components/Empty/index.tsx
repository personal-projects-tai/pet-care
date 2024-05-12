import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'

import background from '@/assets/images/empty.png'

import './styles.scss'
import { Button } from '@/components/Button'
import { useTranslation } from 'react-i18next'

export function Empty() {
  const { t } = useTranslation()
  return (
    <div className="empty">
      <header>
        <Heading type="1" centered={true}>
          {t('dashboard.empty_state.title')}
        </Heading>
        <Subtitle size="1" type="regular" centered={true}>
          {t('dashboard.empty_state.description')}
        </Subtitle>
      </header>
      <section>
        <img className="empty-img" src={background} alt="Empty pets" />
      </section>
      <footer>
        <Button size="lg" variant="primary">
          {t('dashboard.empty_state.add_pet')}
        </Button>
      </footer>
    </div>
  )
}
