import React, { useContext, useState } from 'react'
import { DataContext } from '../context/ThemeContext'

const Navbar = () => {
  
  const data = useContext(DataContext)

  return (
    <div 
      className='h-10 w-full flex justify-between p-2'
      style={{
        backgroundColor: data.color === 'white'? 'black': 'white',
        color: data.color
      }}
    >
        <h1>Hello {data.name}</h1>
        <button 
          className='text-[8px] px-2 py-1 rounded-full border-none text-white cursor-pointer'
          style={{
            backgroundColor: data.color,
            color: data.color === 'white'? 'black': 'white'
          }}
          onClick={data.toggleTheme}
        >
          {data.theme}
        </button>
    </div>
  )
}

export default Navbar