import { BiEdit } from 'react-icons/bi'

const Payable = () => {
  return (
    <>
      <div className='container-fluid row p-0 border-y border-black'>
        <div className='col-6 d-flex justify-between p-2'>
          <span>Items</span>
          <span className='font-bold'>x(x.00)</span>
        </div>
        <div className='col-6 d-flex justify-between p-2'>
          <span>Total</span>
          <span className='font-bold'>
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'BDT',
            }).format(5142)}
          </span>
        </div>
      </div>

      <div className='container-fluid row p-0 '>
        <div className='col-6 d-flex justify-between p-2'>
          <span>
            Order Tax <BiEdit className='inline' />
          </span>
          <span className='font-bold'>0.00</span>
        </div>
        <div className='col-6 d-flex justify-between p-2'>
          <span>
            Discount <BiEdit className='inline' />
          </span>
          <span className='font-bold'>0.00 (0.00)</span>
        </div>
      </div>

      <div className='container-fluid row p-1 w-100 bg-black text-white text-bold'>
        <div className='col'>Total Payable</div>
        <div className='col text-right'>
          {' '}
          {new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'BDT',
          }).format(5142)}
        </div>
      </div>
    </>
  )
}

export default Payable
