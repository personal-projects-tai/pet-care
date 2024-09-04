import './styles.scss'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import PhotoIcon from '@/assets/icons/photo.svg?react'
import { Input } from '@/components/Input'
import { useTheme } from '@/hooks/ThemeContext'
import { toBase64 } from '@/utils/fileToBase64'

import { FooterStep } from '../components/FooterStep'

export function Name() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [srcImage, setSrcImage] = useState<string>('/breeds/akita.png')

  async function handleFile() {
    const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement
    const file = inputElement?.files?.[0]

    if (file) {
      setSrcImage(await toBase64(file))
    }
  }

  return (
    <div className="name-page">
      <div className={`name-page__outer-circle name-page__outer-circle__${theme}`}>
        <div className={`name-page__inner-circle name-page__inner-circle__${theme}`}>
          <img src={srcImage} alt="" />
          <div className="icon">
            <input id="file_upload" type="file" accept="image/png, image/jpeg" onChange={() => handleFile()} />
            <label className="label_file_upload" htmlFor="file_upload">
              <PhotoIcon />
            </label>
          </div>
        </div>
      </div>
      <div className={`name-page__field name-page__field__${theme}`}>
        <label htmlFor="pet-name">{t('dashboard.add_pet.name_page.title')}</label>
        <Input id="pet-name" type="text" placeholder={t('dashboard.add_pet.name_page.input_label')} />
      </div>
      <FooterStep />
    </div>
  )
}
