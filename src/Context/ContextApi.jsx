import { createContext, useState } from 'react'

export const ProductContext = createContext()

const ContextApi = ({ children }) => {
  const [inInvoice, setInInvoice] = useState([])
  const [showToast, setshowToast] = useState(false)

  return (
    <ProductContext.Provider
      value={{ inInvoice, showToast, setInInvoice, setshowToast }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ContextApi
