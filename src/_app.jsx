import Invoicer from './components/invoicer'
import Products from './components/products'

const App = () => {
  return (
    <div className=''>
      <div className='grid grid-rows grid-cols-11 grid-flow-col gap-4'>
        <div className='col-span-4 h-screen bg-slate-200'>
          <Invoicer />
        </div>
        <div className='col-span-7 h-screen bg-slate-200'>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default App
