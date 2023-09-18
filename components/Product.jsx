import Image from 'next/image';
import React from 'react'
import { formatToDollars } from '../helpers';

export function Product({ product }) {

  const { id, name, price, image } = product;

  return (
    <div className='border p-3'>
      <Image
        src={`/assets/img/${image}.jpg`}
        width={400}
        height={500}
        alt={`Imagen de ${name}`}
      />

      <div className="p-5">
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatToDollars(price)}
        </p>
      </div>
    </div>
  )
}
