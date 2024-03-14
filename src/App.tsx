import { SwitchButton } from '@/components/SwitchButton'
import { useTheme, ThemeProvider } from '@/hooks/ThemeContext'

export function App() {
  const { theme } = useTheme()

  console.log('theme::', theme)
  return (
    <>
      <ThemeProvider>
        <SwitchButton />
      </ThemeProvider>
    </>
  )
}
