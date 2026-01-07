import React, { useContext } from 'react'
import { DataContext } from '../context/ThemeContext'

const Sections = () => {
  const data = useContext(DataContext)
  

  return (
    <div 
      className='h-90 p-2'
      style={{
        backgroundColor: data.color,
        color: data.color === 'black'? 'white': 'black' 
      }}
    >
      <h2>The Theme is {data.theme}</h2>
    </div>
  )
}

export default Sections