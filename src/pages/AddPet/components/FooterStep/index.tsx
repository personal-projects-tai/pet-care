import { Button } from '@/components/Button'
import { Subtitle } from '@/components/Subtitle'
import { useTheme } from '@/hooks/ThemeContext'
import { useTranslation } from 'react-i18next'

import './styles.scss'

export function FooterStep() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <footer className={`next-step next-step__${theme}`}>
      <Subtitle size="3" type="semibold">
        {t('utils.actions.title')}
      </Subtitle>
      <div className="actions">
        <Button variant="planed-ghost" size="lg">
          {t('utils.actions.skip_step')}
        </Button>
        <Button variant="primary" size="lg">
          {t('utils.actions.confirm_step')}
        </Button>
      </div>
    </footer>
  )
}
