import React, { useState } from 'react'

const Random = () => {

    const [num,setNum] = useState(0)

    const rnd = () => {
        const rand = Math.floor(Math.random()*100)
        return setNum(rand)
    } 

  return (
    <div>
        <div className='text-white text-2xl bg-blue-600 p-12 m-4 w-fit rounded'>
          {num}
        </div>
        <button 
          onClick={rnd}
          className='bg-emerald-600 p-6 m-4 text-white rounded'
        >
          Random
        </button>
    </div>
  )
}

export default Random