import { useEffect, useState } from 'react';
import { useCategories } from '../hooks/useCategories';
import { KioskContext } from './KioskContext';

export function KioskProvider({ children }) {
  const { categories } = useCategories();
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

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

  const onAddOrder = ({ categoryId, image, ...newOrder }) => {

    const isDuplicated = order.some(product => product.id === newOrder.id);

    if (isDuplicated) {
      const orderModified = order.map(product => (product.id === newOrder.id) ? newOrder : product);
      setOrder(orderModified);
    } else {
      setOrder([...order, newOrder]);
    }
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
        modal,
        onAddOrder
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}