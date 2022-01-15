import { createContext, useState } from 'react'

export const ProductContext = createContext()

const ContextApi = ({ children }) => {
  const [inInvoice, setInInvoice] = useState([])

  return (
    <ProductContext.Provider value={{ inInvoice, setInInvoice }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ContextApi
