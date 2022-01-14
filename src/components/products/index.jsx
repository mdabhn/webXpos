import Product from './product'

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
  return (
    <div className='relative h-screen'>
      <div
        style={{ placeSelf: 'center' }}
        className='d-flex justify-content-between'
      >
        {productsData.map((data) => (
          <Product {...data} key={data.id} />
        ))}
      </div>
      <div className='absolute bottom-0'>hello</div>
    </div>
  )
}

export default Products