const WareHouse = () => {
  return (
    <div className='text-black border-1 border-black mt-1'>
      <select
        className='form-select bg-slate-200'
        aria-label='Default select example'
      >
        <option defaultValue value='h-01'>
          Ware House 01
        </option>
        <option value='h-02'> Ware House 02</option>
        <option value='h-03'> Ware House 03</option>
        <option value='h-04'> Ware House 04</option>
      </select>
    </div>
  )
}

export default WareHouse
