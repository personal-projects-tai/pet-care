import { ChangeEvent, useState } from 'react'
import { useTheme } from '@/hooks/ThemeContext'

import './styles.scss'

export function SwitchButton() {
  const { toggleTheme } = useTheme()
  const [enabled, setEnabled] = useState<boolean>(false)

  const changeMode = (event: ChangeEvent<HTMLInputElement>) => {
    setEnabled(() => event.target.checked)
    toggleTheme()
  }
  return (
    <>
      <label role="switch" className={enabled ? 'switch switch__checked' : 'switch'}>
        <input type="checkbox" onChange={e => changeMode(e)} />
        <span></span>
      </label>
    </>
  )
}
