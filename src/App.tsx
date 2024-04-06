import { RouterProvider } from 'react-router-dom'
import { router } from '@/router'
import { ThemeProvider } from '@/hooks/ThemeContext'
import { SidebarProvider } from './hooks/DashboardSidebarContext'

export function App() {
  return (
    <>
      <SidebarProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </SidebarProvider>
    </>
  )
}
