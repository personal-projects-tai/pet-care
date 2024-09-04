import './styles.scss'

import { useTranslation } from 'react-i18next'

import background from '@/assets/images/empty.png'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Subtitle } from '@/components/Subtitle'
import { router } from '@/router'

export function Empty() {
  const { t } = useTranslation()

  function handleAddNewPet() {
    router.navigate('/dashboard/add-pet')
  }

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
        <Button size="lg" variant="primary" onClick={() => handleAddNewPet()}>
          {t('dashboard.empty_state.add_pet')}
        </Button>
      </footer>
    </div>
  )
}
