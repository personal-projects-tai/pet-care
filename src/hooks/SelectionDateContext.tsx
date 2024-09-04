import { createContext, ReactNode, useContext, useState } from 'react'

export type KindType = 'birthdate' | 'adoption_date'

interface SelectionDateContextProps {
  kind: KindType
  selectKind: (kind: KindType) => void
}

interface SelectionDateProviderProps {
  children: ReactNode
}

const SelectionDateContext = createContext({} as SelectionDateContextProps)

export function SelectionDateProvider({ children }: SelectionDateProviderProps) {
  const [kind, setKind] = useState<KindType>('birthdate')

  function selectKind(kind: KindType) {
    setKind(kind)
  }

  return <SelectionDateContext.Provider value={{ kind, selectKind }}>{children}</SelectionDateContext.Provider>
}

export const useSelectionDate = () => {
  const context = useContext(SelectionDateContext)

  return context
}
