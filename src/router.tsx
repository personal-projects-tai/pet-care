import { createBrowserRouter } from 'react-router-dom'

import { AddPetLayout } from './pages/_layouts/AddPetLayout'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { DashboardLayout } from './pages/_layouts/DashboardLayout'
import { PetProfileLayout } from './pages/_layouts/PetProfileLayout'
import { Breed } from './pages/AddPet/Breed'
import { Caretakers } from './pages/AddPet/Caretakers'
import { ImportantDates } from './pages/AddPet/ImportantDates'
import { Name } from './pages/AddPet/Name'
import { Size } from './pages/AddPet/Size'
import { Weight } from './pages/AddPet/Weight'
import { Dashboard } from './pages/Dashboard'
import { LogIn } from './pages/LogIn'
import { Onboarding } from './pages/Onboarding'
import { SignUp } from './pages/SignUp'

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
          },
          {
            path: 'name',
            element: <Name />
          },
          {
            path: 'size',
            element: <Size />
          },
          {
            path: 'weight',
            element: <Weight />
          },
          {
            path: 'important_dates',
            element: <ImportantDates />
          },
          {
            path: 'caretakers',
            element: <Caretakers />
          }
        ]
      },
      {
        path: 'pet-profile',
        element: <PetProfileLayout />
      }
    ]
  }
])
