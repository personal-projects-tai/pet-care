import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface SidebarContextProps {
  isOpen: boolean
  toggleIsOpen: () => void
}

interface DashboardSidebarProviderProps {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextProps)

export function SidebarProvider({ children }: DashboardSidebarProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleIsOpen = () => {
    setIsOpen(state => (state === true ? false : true))
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true)
    }
  }

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <SidebarContext.Provider value={{ isOpen, toggleIsOpen }}>{children}</SidebarContext.Provider>
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)

  return context
}
