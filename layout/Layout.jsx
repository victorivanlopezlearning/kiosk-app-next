import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { useKiosk } from '../hooks';
import { ModalProduct, Sidebar, Steps } from '../components';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next'); // Id primary aplication

export default function Layout({ children, title = '', description = '' }) {

  const { modal } = useKiosk();

  return (
    <>
      <Head>
        <title>{`Quiosco - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/vilg-favicon.png" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Steps />
            {children}
          </div>
        </main>
      </div>

      <Modal
        isOpen={modal}
        style={customStyles}
      >
        <ModalProduct />
      </Modal>

      <ToastContainer />
    </>
  )
}
