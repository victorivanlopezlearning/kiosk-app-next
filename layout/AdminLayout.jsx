import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLayout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title>Quiosco - {title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vilg-favicon.png" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 p-5 flex justify-center md:block">
          <Image
            width={300}
            height={100}
            src="/assets/img/logo.svg"
            alt="imagen logotipo"
          />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}