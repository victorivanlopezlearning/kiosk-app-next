import { useRouter } from 'next/router';

const steps = [
  { step: 1, name: 'Menú', url: '/' },
  { step: 2, name: 'Resumen', url: '/summary' },
  { step: 3, name: 'Datos y Total', url: '/checkout' },
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
    </>
  )
}
