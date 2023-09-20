import { Message, ProductSummary } from '../components';
import { useKiosk } from '../hooks';
import Layout from '../layout/Layout';


export default function Sumary() {

  const { order } = useKiosk();

  return (
    <Layout title='Resumen del pedido'>
      <h1 className='text-4xl font-black'>Resumen</h1>
      <p className='text-2xl my-10'>Revisa tu pedido</p>

      {
        (order.length > 0)
          ? order.map(product => (
            <ProductSummary key={product.id} product={product} />
          ))
          : <Message message='No hay elementos en tu pedido.' />
      }
    </Layout>
  )
}