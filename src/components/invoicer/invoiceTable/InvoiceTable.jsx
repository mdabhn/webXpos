import { useContext } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'
import { ProductContext } from '../../../Context/ContextApi'

const InvoiceTable = () => {
  const { inInvoice, setInInvoice } = useContext(ProductContext)

  const removeItem = (id) => {
    setInInvoice(inInvoice.filter((i) => i.id !== id))
  }

  return (
    <div style={{ height: '40%', overflowY: 'scroll' }}>
      <table className='table table-striped table-bordered mt-2 border-gray-400 text-center overflow-scroll'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '50%' }}>
              Product
            </th>
            <th scope='col'>price</th>
            <th scope='col'>Qty</th>
            <th scope='col'>Subtotal</th>
            <th scope='col' className='relative'>
              <div className='w-100 h-100 d-flex justify-content-center'>
                <AiOutlineDelete style={{ fontSize: '21px' }} />
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {inInvoice.map(({ id, name, price, qty }, index) => (
            <tr key={id}>
              <th scope='row'>
                IT{inInvoice.length - index} {name}
              </th>
              <td>{price}</td>
              <td>
                <input defaultValue={qty} className='w-10' />
              </td>
              <td>{qty * price}</td>
              <td className='text-center'>
                <span
                  className='d-flex justify-content-center align-items-center h-100'
                  title='remove'
                >
                  <ImCross
                    className='mt-1 cursor-pointer'
                    onClick={() => removeItem(id)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {inInvoice.length === 0 && (
        <p className='text-center w-100'>No Item Added !</p>
      )}
    </div>
  )
}

export default InvoiceTable
