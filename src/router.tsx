import { createBrowserRouter } from 'react-router-dom'
import { Onboarding } from './pages/Onboarding'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />
  }
])
