import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useKiosk } from '../hooks';
import { formatToDollars } from '../helpers';

export function ModalProduct() {

  const { product, onSetModal, onAddOrder, order } = useKiosk();
  const [qty, setQty] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const { name, image, price } = product;


  useEffect(() => {
    const isInTheOrder = order.some(productState => productState.id === product.id);

    if (isInTheOrder) {
      const productEditing = order.find(productState => productState.id === product.id);
      setIsEditing(true);
      setQty(productEditing.qty);
    }

  }, [product, order])


  return (
    <div className="flex flex-col md:flex-row items-center md:gap-10 p-3 relative">
      <div className="md:w-1/4">
        <Image
          src={`/assets/img/${image}.jpg`}
          width={300}
          height={400}
          alt={`Imagen de ${name}`}
        />
      </div>

      <div className="md:w-3/4">
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p className='mt-4 font-black text-4xl text-amber-500'>
          {formatToDollars(price)}
        </p>

        <div className='mt-5 flex gap-2'>
          <button
            onClick={() => {
              if (qty <= 1) return;
              setQty(qty - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <p className='text-2xl'>{qty}</p>

          <button
            onClick={() => {
              if (qty >= 5) return;
              setQty(qty + 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

          </button>
        </div>

        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 transition-colors text-white font-bold px-5 py-2 mt-5'
          onClick={() => onAddOrder({ ...product, qty })}
        >
          {isEditing ? 'Guardar cambios' : 'Añadir al pedido'}
        </button>
      </div>

      <div className='absolute top-0 right-0'>
        <button
          onClick={onSetModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-red-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
