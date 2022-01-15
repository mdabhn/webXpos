import InvoiceTable from './invoiceTable/InvoiceTable'
import CustomerType from './options/CustomerType'
import Search from './options/Search'
import WareHouse from './options/WareHouse'
import Total from './Prices'
import Actions from './Prices/Actions'
const Invoicer = () => {
  return (
    <div className='p-2 relative h-screen'>
      <CustomerType />
      <WareHouse />
      <Search />
      <InvoiceTable />
      <div className='absolute bottom-0 w-100'>
        <Total />
        <Actions />
      </div>
    </div>
  )
}

export default Invoicer
