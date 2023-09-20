import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCategories } from '../hooks/useCategories';
import { KioskContext } from './KioskContext';
import { toast } from 'react-toastify';

export function KioskProvider({ children }) {
  const { categories } = useCategories();
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setCurrentCategory(categories[0])
  }, [categories])

  const onClickCategory = (id) => {
    const [category] = categories.filter(cat => cat.id === id);
    setCurrentCategory(category);
    router.push('/');
  }

  const onSetProduct = (product) => {
    setProduct(product);
  }

  const onSetModal = () => {
    setModal(!modal);
  }

  const onAddOrder = ({ categoryId, ...newOrder }) => {

    const isDuplicated = order.some(product => product.id === newOrder.id);

    if (isDuplicated) {
      const orderModified = order.map(product => (product.id === newOrder.id) ? newOrder : product);
      setOrder(orderModified);
      toast.success('Guardado correctamente');
    } else {
      setOrder([...order, newOrder]);
      toast.success(`${newOrder.name} se agregó al pedido`);
    }
    setModal(false);
  }

  const onEditQty = (id) => {
    const productToUpdate = order.find((product) => product.id === id);
    setProduct(productToUpdate);
    setModal(!modal);
  }

  const onRemoveProduct = (id) => {
    const orderModified = order.filter((product) => product.id !== id);
    setOrder(orderModified);
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
        onAddOrder,
        order,
        onEditQty,
        onRemoveProduct
      }}
    >
      {children}
    </KioskContext.Provider>
  )
}