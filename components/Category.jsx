import Image from 'next/image';

export function Category({ category }) {

  const { id, name, icon } = category;

  return (
    <div className='flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-colors'>
       <Image
        src={`/assets/img/icono_${icon}.svg`}
        width={70}
        height={70}
        alt={`Icono ${icon}`}
      />

      <button
        className='text-2xl font-bold'
      >
        {name}
      </button>
    </div>
  )
}
