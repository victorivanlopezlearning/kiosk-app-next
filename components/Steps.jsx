import { useRouter } from 'next/router';
import { progressByPath } from '../helpers';

const steps = [
  { step: 1, name: 'Menú', url: '/' },
  { step: 2, name: 'Resumen', url: '/summary' },
  { step: 3, name: 'Pagar', url: '/checkout' },
]

export function Steps() {

  const router = useRouter();

  return (
    <>
      <div className="flex justify-between mb-5">
        {
          steps.map(({ step, name, url }) => (
            <button
              key={step}
              className="text-2xl font-bold"
              onClick={() => router.push(url)}
            >
              {name}
            </button>
          ))
        }
      </div>

      <div className='bg-gray-100 mb-10'>
        <div
          className='rounded-full bg-amber-500 text-xs leading-none text-center h-2 text-white'
          style={{ width: `${progressByPath(router.pathname)}%` }}>
        </div>
      </div>
    </>
  )
}
