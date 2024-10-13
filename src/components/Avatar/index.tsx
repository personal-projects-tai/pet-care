import './styles.scss'

import { useTheme } from '@/hooks/ThemeContext'
import { abbreviate } from '@/utils/abbreviationName'

interface AvatarProps {
  username: string
  size?: 'small' | 'large'
}

export function Avatar({ username, size }: AvatarProps) {
  const { theme } = useTheme()
  return <div className={`avatar avatar__${theme} ${size ? size : 'large'}`}>{abbreviate(username)}</div>
}
