import { useContext } from 'react'
import { ProductContext } from '../../../Context/ContextApi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'

const Actions = () => {
  const { setshowToast } = useContext(ProductContext)

  return (
    <>
      <div className='row container-fluid text-white font-bold text-left g-1'>
        <div className='col-8'>
          <div className='row'>
            <div className='col-6 bg-yellow-500'>
              <button className='w-100 p-2'>Suspense</button>
            </div>
            <div className='col-6 bg-sky-600'>
              <button
                className='w-100 p-2'
                onClick={() => setshowToast((prev) => !prev)}
              >
                Order
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-6 bg-red-900'>
              <button className='w-100 p-2'>Cancel</button>
            </div>
            <div className='col-6 bg-sky-800'>
              <button className='w-100 p-2'>Bill</button>
            </div>
          </div>
        </div>
        <div className='col-4 bg-green-500 '>
          <button className='w-100 p-1 text-center d-flex justify-content-center align-items-center h-100'>
            <FaRegMoneyBillAlt /> <span className='ms-1'>Payment</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Actions
