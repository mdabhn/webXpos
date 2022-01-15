import Invoicer from './components/invoicer'
import Products from './components/products'
import ContextApi from './Context/ContextApi'

const App = () => {
  return (
    <ContextApi>
      <div className='grid grid-rows grid-cols-11 grid-flow-col gap-3'>
        <div className='col-span-4 h-screen bg-slate-200'>
          <Invoicer />
        </div>
        <div className='col-span-7 h-screen bg-slate-200'>
          <Products />
        </div>
      </div>
    </ContextApi>
  )
}

export default App
