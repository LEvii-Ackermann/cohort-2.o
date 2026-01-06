import React, { useState } from 'react'

const Washroom = () => {
    
    const [gender, setGender] = useState('Male')

    const fun = () => {
        setGender(prevGender => prevGender === 'Male' ? 'Female' : 'Male')
    }

    const color = gender === 'Male' ? 'blue' : 'pink'
    console.log(gender, color)

  return (
    <div>
        <h2 className='m-10 text-2xl'>Your Gender is ~{gender}</h2>

        <button 
          className='text-white bg-emerald-600 px-6 py-4 active:scale-95 m-10 cursor-pointer'
          onClick={fun}
        >
            Change Gender
        </button>

        <div 
          className='w-100 h-100 flex items-center justify-center'
          style={{
            backgroundColor: color
        }}
        >
            {gender} Washroom
        </div>
    </div>


  )
}

export default Washroom