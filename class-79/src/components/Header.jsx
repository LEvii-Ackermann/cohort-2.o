import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between bg-emerald-900 px-8 py-4 text-white'>
        <h2>Navbar</h2>
        <input type="text" className='border-white border-2'/>
        <div className='flex gap-8 text-white'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/course" >Course</Link>
        </div>
    </div>
  )
}

export default Header