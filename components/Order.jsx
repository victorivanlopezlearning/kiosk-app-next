import Image from 'next/image';
import { formatToDollars } from '../helpers';


export function Order({ order }) {

  const { id, name, order: details, total } = order;

  return (
    <div className="border p-10 space-y-5">
      <h3 className='text-2xl font-bold'>Orden: #{id}</h3>
      <p className='text-lg font-bold'>Cliente: {name}</p>

      <div>
        {
          details.map(({ id, name, qty, image }) => (
            <div
              key={id}
              className="py-3 flex items-center border-b last-of-type:border-0"
            >
              <div className="w-32">
                <Image
                  src={`/assets/img/${image}.jpg`}
                  width={400}
                  height={500}
                  alt={`imagen de ${name}`}
                />
              </div>

              <div className='p-5 space-y-2'>
                <h4 className='text-xl font-bold text-amber-500'>{name}</h4>
                <p className='text-lg font-bold'>Cantidad: {qty}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className='md:flex md:items-center md:justify-between my-10'>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          Total a pagar: {formatToDollars(total)}
        </p>
      </div>
    </div>
  )
}
