import './index.css'

const Product = ({ name, price, imgSrc, alt }) => {
  return (
    <div
      className='m-2 card d-flex relative justify-items-center align-items-center __single_product uppercase'
      title={`${name}. Price - ${price}`}
      style={{ height: '160px' }}
    >
      <img
        src={imgSrc}
        alt={alt}
        className='p-2'
        style={{
          minWidth: '130px',
          width: '145px',
          objectFit: 'cover',
        }}
      />
      <span className='p-1 absolute bottom-0'>{name}</span>
    </div>
  )
}

export default Product
