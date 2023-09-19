import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories';
import { KioskContext } from './KioskContext';

export function KioskProvider({ children }) {
  const { categories } = useCategories();
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setCurrentCategory(categories[0])
  }, [categories])

  const onClickCategory = (id) => {
    const [category] = categories.filter(cat => cat.id === id);
    setCurrentCategory(category);
  }

  const onSetProduct = (product) => {
    setProduct(product);
  }

  const onSetModal = () => {
    setModal(!modal);
  }

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        onClickCategory,
        onSetProduct,
        product,
        onSetModal,
        modal
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}