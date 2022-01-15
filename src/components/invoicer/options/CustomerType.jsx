import { BsPencil } from 'react-icons/bs'
import { AiOutlineEye, AiOutlinePlusCircle } from 'react-icons/ai'

const CustomerType = () => {
  return (
    <div className='row g-0 text-black border-1 border-black'>
      <div className='col-9'>
        <select
          className='form-select bg-slate-200'
          aria-label='Default select example'
        >
          <option defaultValue value='win-cs'>
            Walk-In Customer
          </option>
          <option value='online'>Online Customer</option>
        </select>
      </div>
      <div className='col-1 d-flex justify-content-center align-items-center border-black border-x text-blue-800'>
        <BsPencil />
      </div>
      <div className='col-1 d-flex justify-content-center align-items-center text-blue-800'>
        <AiOutlineEye />
      </div>
      <div className='col-1 d-flex justify-content-center align-items-center border-black border-l-2 text-blue-800'>
        <AiOutlinePlusCircle />
      </div>
    </div>
  )
}

export default CustomerType
