import './styles.scss'

import { useTheme } from '@/hooks/ThemeContext'

export function PhotoPet() {
  const { theme } = useTheme()
  return (
    <div className={`photo-pet photo-pet__${theme}`}>
      <div className="outer-circle">
        <div className="inner-circle">
          <img src="/breeds/akita.png" alt="" />
        </div>
      </div>
    </div>
  )
}
