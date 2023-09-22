import { useMemo } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from '../../layout/AdminLayout';
import { Message, Order } from '../../components';

export default function Home() {

  const fetcher = () => axios('/api/orders').then(res => res.data); // fetcher función para conectar a la API. Usando Fetch, Axios, etc
  const { data, error, isLoading } = useSWR('/api/orders', fetcher);
  const showOrders = useMemo(() => data && data.length > 0, [data]);

  // if (isLoading) return <AdminLayout><h3>Cargando...</h3></AdminLayout>

  return (
    <AdminLayout title="Administración">
      <h1 className='text-4xl font-black'>Panel de administración</h1>
      <p className='text-2xl my-10'>Administra las ordenes</p>

      {
        (showOrders)
          ? data.map(order => (
            <Order key={order.id} order={order} />
          ))
          : <Message message='No hay Ordenes pendientes.' />
      }
    </AdminLayout>
  )
}