import Image from 'next/image';
import React from 'react'
import { formatToDollars } from '../helpers';
import { useKiosk } from '../hooks/useKiosk';

export function Product({ product }) {

  const { onSetProduct, onSetModal } = useKiosk()

  const { name, price, image } = product;

  return (
    <div className='border p-3 flex flex-col justify-between'>
      <Image
        src={`/assets/img/${image}.jpg`}
        width={400}
        height={500}
        alt={`Imagen de ${name}`}
      />
      <div className='px-5 pt-5 mb-auto'>
        <h3 className='text-2xl font-bold'>{name}</h3>
      </div>

      <div className="px-5">
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatToDollars(price)}
        </p>

        <button
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold transition-colors'
          onClick={() => {
            onSetModal();
            onSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
