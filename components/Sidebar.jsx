import { useState } from 'react';
import Image from 'next/image';
import { useKiosk } from '../hooks/useKiosk';
import { Category } from './';

export function Sidebar() {
  const { categories, open, setOpen } = useKiosk();

  return (
    <>
      <div className='p-5 flex justify-center'>
        <Image
          src="/assets/img/logo.svg"
          width={300}
          height={100}
          alt="Imagen logotipo"
        />
      </div>

      <div>
        <div className='flex justify-center'>
          <button
            onClick={() => setOpen(!open)}
            id="navbarToggler"
            className={` ${open && "navbarTogglerActive"
              } rounded-lg px-3 py-[6px] bg-amber-400 focus:ring-2 md:hidden`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <nav
          id="navbarCollapse"
          className={`mt-5 md:block ${!open && "hidden"}`}
        >
          {
            categories.map(category => (
              <Category key={category.id} category={category} />
            ))
          }
        </nav>
      </div>
    </>
  )
}
