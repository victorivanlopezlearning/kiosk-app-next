import { useKiosk } from '../hooks/useKiosk';
import Layout from '../layout/Layout';

export default function Home() {

  const { currentCategory } = useKiosk();

  return (
    <Layout title={`Menú de ${currentCategory?.name}`}>
      <h1 className='text-4xl font-black'>{currentCategory?.name}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido a continuación</p>
    </Layout>
  )
}
