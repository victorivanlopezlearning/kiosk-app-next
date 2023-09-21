import AdminLayout from '../../layout/AdminLayout';


export default function Home() {

  return (
    <AdminLayout title="Administración">
      <h1 className='text-4xl font-black'>Panel de administración</h1>
      <p className='text-2xl my-10'>Administra las ordenes</p>
    </AdminLayout>
  )
}