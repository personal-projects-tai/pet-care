import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { Onboarding } from './pages/Onboarding'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { DashboardLayout } from './pages/_layouts/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import { AddPetLayout } from './pages/_layouts/AddPetLayout'
import { Breed } from './pages/AddPet/Breed'

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
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: 'add-pet',
        element: <AddPetLayout />,
        children: [
          {
            path: '',
            element: <Breed />
          }
        ]
      }
    ]
  }
])
