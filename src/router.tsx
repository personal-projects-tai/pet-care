import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { Onboarding } from './pages/Onboarding'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/',
        element: <Onboarding />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <LogIn />
      }
    ]
  }
])
