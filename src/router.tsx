import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { Onboarding } from './pages/Onboarding'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Onboarding />
      }
    ]
  }
])
