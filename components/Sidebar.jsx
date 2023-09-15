import Image from 'next/image';
import { useKiosk } from '../hooks/useKiosk';
import { Category } from './';

export function Sidebar() {

  const { categories } = useKiosk();

  return (
    <>
      <Image
        src="/assets/img/logo.svg"
        width={300}
        height={100}
        alt="Imagen logotipo"
      />

      <nav className='mt-10'>
        {
          categories.map(category => (
            <Category key={category.id} category={category} />
          ))
        }
      </nav>
    </>
  )
}
