import { useCategories } from '../hooks/useCategories';
import { KioskContext } from './KioskContext';

export function KioskProvider({ children }) {
  const { categories } = useCategories();

  return (
    <KioskContext.Provider
      value={{
        categories
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}