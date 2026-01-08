import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'


const Products = () => {

  const productData = useContext(ProductDataContext)

  let renderData = (
    <p className="p-4 text-sm text-gray-500">
      Loading products...
    </p>
  )

  if(productData.length > 0){
    renderData = productData.map((elem) => {
        return (
          <div  key={elem.id} className='h-40 w-32 border rounded border-black p-2 flex flex-col items-center'>
            <Link to={`/products/${elem.id}`}>
              <img className='h-24 w-full object-contain' src={elem.image} alt="" />
              <h4 className='text-[8px] text-black mt-2 line-clamp-3 text-center font-semibold'>{elem.title}</h4>
            </Link>
          </div>

        )
      })
  }

  return (

    <div className='flex flex-wrap gap-4 m-4'>
      {renderData}
    </div>

  )
}

export default Products