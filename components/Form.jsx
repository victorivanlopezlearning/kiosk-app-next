import { useKiosk } from '../hooks';
import { formatToDollars } from '../helpers';

export function Form() {

  const { order, name, setName, onSendOrder, total } = useKiosk();

  const checkOrder = () => order.length === 0 || name.trim().length < 3;

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={onSendOrder}
    >
      <div>
        <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
        />
      </div>
      <div>
        <p className="text-2xl">Total a pagar: <span className="font-bold">{formatToDollars(total)}</span> </p>
      </div>

      <div>
        <input
          type="submit"
          value='Confirmar pedido'
          disabled={checkOrder()}
          className="w-full lg:w-1/3 p-3 rounded font-bold text-white bg-indigo-600 hover:bg-indigo-800 transition-colors hover:cursor-pointer disabled:bg-indigo-100 disabled:hover:cursor-not-allowed"
        />
      </div>
    </form>
  )
}
