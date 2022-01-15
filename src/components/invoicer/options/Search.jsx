const Search = () => {
  return (
    <div className='text-black border-1 border-black mt-1'>
      <div className='input-group flex-nowrap'>
        <input
          type='text'
          className='form-control'
          placeholder='Search/Scan products by name/code'
          aria-label='search'
          aria-describedby='addon-wrapping'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          title='Search/Scan products by name/code'
        />
        <span className='input-group-text' id='addon-wrapping'>
          @
        </span>{' '}
      </div>
    </div>
  )
}

export default Search
