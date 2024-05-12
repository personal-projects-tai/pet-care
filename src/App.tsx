import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { ThemeProvider } from '@/hooks/ThemeContext'
import { SidebarProvider } from './hooks/DashboardSidebarContext'
import { I18nextProvider } from 'react-i18next'

import i18n from './i18n'

export function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <SidebarProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </SidebarProvider>
      </I18nextProvider>
    </>
  )
}
