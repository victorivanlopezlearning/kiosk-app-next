import Image from 'next/image';
import { useKiosk } from '../hooks/useKiosk';
import { Category } from './';

export function Sidebar() {

  const { categories } = useKiosk();

  return (
    <>
    <div className='p-5'>
      <Image
        src="/assets/img/logo.svg"
        width={300}
        height={100}
        alt="Imagen logotipo"
      />
    </div>

      <nav className='mt-5'>
        {
          categories.map(category => (
            <Category key={category.id} category={category} />
          ))
        }
      </nav>
    </>
  )
}
