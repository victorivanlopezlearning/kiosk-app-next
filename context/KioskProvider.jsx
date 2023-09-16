import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories';
import { KioskContext } from './KioskContext';

export function KioskProvider({ children }) {
  const { categories } = useCategories();
  const [currentCategory, setCurrentCategory] = useState({});

  const onClickCategory = (id) => {
    const [category] = categories.filter(cat => cat.id === id);
    setCurrentCategory(category);
  }

  useEffect(() => {
    setCurrentCategory(categories[0])
  }, [categories])

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        onClickCategory
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}