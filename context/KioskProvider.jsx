import { KioskContext } from './KioskContext';

export function KioskProvider({ children }) {
  return (
    <KioskContext.Provider
      value={{}}
    >
      {children}
    </KioskContext.Provider>
  )
}