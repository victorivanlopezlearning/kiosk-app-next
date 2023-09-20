import Layout from '../layout/Layout';
import { Form } from '../components';


export default function Checkout() {
  return (
    <Layout>
      <h1 className='text-4xl font-black'>Confirmación del pedido</h1>
      <p className='text-2xl my-10'>A continuación, confirma los datos del pedido</p>

      <Form />
    </Layout>
  )
}