import './styles.scss'

import { useTheme } from '@/hooks/ThemeContext'
import { abbreviate } from '@/utils/abbreviationName'

interface AvatarProps {
  username: string
}

export function Avatar({ username }: AvatarProps) {
  const { theme } = useTheme()
  return <div className={`avatar avatar__${theme}`}>{abbreviate(username)}</div>
}
