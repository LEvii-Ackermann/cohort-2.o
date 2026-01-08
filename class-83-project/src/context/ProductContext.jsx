import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { getProductapi } from '../api/ProductApi'

export const ProductDataContext = createContext()

const ProductContext = (props) => {

  const [allProducts, setAllProducts] = useState([])  

  const getProductFun = async () => {
    setAllProducts(await getProductapi())
  }
 
  useEffect(() => {
    getProductFun()
  }, [])

  return (
    <ProductDataContext.Provider value={allProducts}>
        <div>
            {props.children}
        </div>
    </ProductDataContext.Provider>
    
  )
}

export default ProductContext