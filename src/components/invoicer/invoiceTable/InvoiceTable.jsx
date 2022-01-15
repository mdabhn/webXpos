import { AiOutlineDelete } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

const InvoiceTable = () => {
  return (
    <div>
      <table className='table table-striped table-bordered mt-2 border-gray-400 text-center'>
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
          <tr>
            <th scope='row'>1</th>
            <td>100000</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className='text-center'>
              <span
                className='d-flex justify-content-center align-items-center h-100'
                title='remove'
              >
                <ImCross className='mt-1 cursor-pointer' />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceTable
