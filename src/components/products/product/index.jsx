import { useContext } from 'react'
import { nanoid } from 'nanoid'
import { ProductContext } from '../../../Context/ContextApi'
import './index.css'

const Product = ({ name, price, imgSrc, alt, id }) => {
  const { setInInvoice } = useContext(ProductContext)

  const addToInvoice = () => {
    setInInvoice((prev) => [
      ...prev,
      {
        name,
        price,
        imgSrc,
        alt,
        id: nanoid(),
        qty: 1,
      },
    ])
  }

  return (
    <div
      className='m-2 card d-flex relative justify-items-center align-items-center __single_product uppercase'
      title={`${name}. Price - ${price}`}
      style={{ height: '160px' }}
      onClick={() => addToInvoice()}
    >
      <img
        src={imgSrc}
        alt={alt}
        className='p-2'
        style={{
          minWidth: '50%',
          width: '145px',
          objectFit: 'cover',
        }}
      />
      <span className='p-1 absolute bottom-0'>{name}</span>
    </div>
  )
}

export default Product
