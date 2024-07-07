import './styles.scss'

import { InputHTMLAttributes, useEffect } from 'react'

import { useTheme } from '@/hooks/ThemeContext'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
  choose: () => void
}

export function RadioButton({ id, label, choose, ...rest }: Props) {
  const { theme } = useTheme()
  function handleSelect() {
    const element = document.getElementById(id)
    const elementToBeSelected = document.querySelector(`.${id}`)

    if ((element as HTMLInputElement)?.checked) {
      elementToBeSelected?.classList.add('selected')
    }

    choose()
  }

  function handleOutsideClick(event: MouseEvent) {
    const prevSelected = document.querySelector(`.${id}.selected`)
    if (!(event.target as HTMLElement).closest(`.${id}`)) {
      prevSelected?.classList.remove('selected')
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`radio-input radio-input__${theme} ${id}`}>
      <input type="radio" id={id} name="radio" onChange={() => handleSelect()} {...rest} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
