import { useEffect, useContext } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsFillCreditCardFill } from 'react-icons/bs'
import Product from './product'
import './index.css'
import { ProductContext } from '../../Context/ContextApi'

const productsData = [
  {
    id: '1',
    name: 'canon 1300D',
    price: 30500,
    imgSrc: '/assets/imgs/canon1300d.jpg',
    alt: 'camera',
  },
  {
    id: '2',
    name: 'asus rog 5',
    price: 58000,
    imgSrc: '/assets/imgs/asus-rog-5.jpg',
    alt: 'phone',
  },
  {
    id: '3',
    name: 'mackbook',
    price: 178000,
    imgSrc: '/assets/imgs/mackbook.jpg',
    alt: 'laptop',
  },
  {
    id: '4',
    name: 'xiamo mi 11',
    price: 52000,
    imgSrc: '/assets/imgs/mi11.jpg',
    alt: 'xi-phone',
  },
  {
    id: '5',
    name: 'ssd 120gb',
    price: 12000,
    imgSrc: '/assets/imgs/ssd.jpg',
    alt: 'ssd',
  },
  {
    id: '6',
    name: 'ssd 256gb',
    price: 25000,
    imgSrc: '/assets/imgs/ssd.jpg',
    alt: 'ssd',
  },
  {
    id: '7',
    name: 'ssd 512gb',
    price: 30000,
    imgSrc: '/assets/imgs/ssd.jpg',
    alt: 'ssd',
  },
]

const Products = () => {
  const { showToast, setshowToast } = useContext(ProductContext)

  useEffect(() => {
    if (showToast) {
      const tst = document.getElementById('toast')
      if (!tst.classList.contains('show')) {
        tst.classList.add('show')
        setTimeout(() => {
          const tst = document.getElementById('toast')
          tst.classList.remove('show')
        }, 3000)
        setshowToast(false)
      }
    }
  }, [showToast, setshowToast])

  return (
    <div className='relative h-screen'>
      <div className='toast absolute right-0 z-10' id='toast'>
        <div className='toast-header bg-green-600 text-white'>
          <strong className='me-auto'>Successful</strong>
          <button type='button' className='btn-close' data-bs-dismiss='toast'>
            x
          </button>
        </div>
        <div className='toast-body'>
          <p>The Order is Saved Successfully</p>
        </div>
      </div>

      <div
        style={{ placeSelf: 'center' }}
        className='d-flex justify-content-between'
      >
        {productsData.map((data) => (
          <Product {...data} key={data.id} />
        ))}
      </div>
      <div className='absolute bottom-0 w-100 overflow-hidden'>
        <div className='row d-flex text-white'>
          <div className='col _icons bg-blue-600'>
            <AiOutlineArrowLeft />
          </div>
          <div className='col _icons bg-blue-800'>
            <BsFillCreditCardFill />{' '}
            <span className='ms-1'>Sell Gift Cards</span>
          </div>
          <div className='col _icons bg-blue-600'>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
