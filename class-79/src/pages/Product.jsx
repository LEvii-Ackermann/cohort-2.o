import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='text-3xl underline text-white absolute top-1/2 left-1/2 -translate-1/2'>
      <h1>Product</h1>
      <div className='flex underline gap-8 mt-6 flex-wrap'>
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
    </div>

    
  )
}

export default Product