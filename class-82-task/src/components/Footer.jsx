import React, { useContext } from 'react'
import { DataContext } from '../context/ThemeContext'

const Footer = () => {

  const data = useContext(DataContext)

  return (
    <div className='h-10 absolute bottom-0 w-full p-2'
      style={{
        backgroundColor: data.color === 'white'? 'black': 'white',
        color: data.color
      }}
    >
      <h1>This is the End!</h1>
    </div>
  )
}

export default Footer