import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {

  const {productId} = useParams()

  const productData = useContext(ProductDataContext)
  const selectedProduct = productData.find((elem) => elem.id == productId)

  if(!selectedProduct){
    return <div className='p-6'>Loading...</div>
  } 
  

  return (
    <div className="p-6 flex gap-6 border border-black mt-12 mx-6 rounded">

      <div>
        <img
          src={selectedProduct.image}
          alt=""
          className="h-64 w-64 object-contain"
        />
      </div>

      <div className="flex flex-col gap-3">

        <span className="text-xs text-gray-500">
          {selectedProduct.category}
        </span>

        <h1 className="text-xl font-semibold">
          {selectedProduct.title}
        </h1>

        <p className="text-gray-600 text-sm">
          {selectedProduct.description}
        </p>

        <p className="text-lg font-bold">
          ${selectedProduct.price}
        </p>

        <p className="text-sm text-gray-500">
          ⭐ {selectedProduct.rating.rate} ({selectedProduct.rating.count})
        </p>

        <button className="bg-black text-white px-4 py-2 w-fit rounded cursor-pointer">
          Add to Cart
        </button>

      </div>
    </div>
  )
}

export default ProductDetails