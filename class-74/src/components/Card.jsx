import React from 'react'

const Card = (props) => {

 
  return (
    <div className='border-2 border-black w-72 h-[400px] rounded-[30px] bg-white overflow-hidden relative'>
        
        {/* header */}
        <div className='h-32 w-full '>
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt='cover'
            className='h-full w-full object-cover p-2 rounded-[30px]'
          />
        </div>

        {/* avatar */}
        <div className='absolute bg-gray-300 h-[90px] w-[90px] rounded-full border-[3px] border-white top-[88px] left-8'>
          <img 
           src={props.elem.image}
           alt='img'
           className='h-full w-full object-cover rounded-full'
          />
        </div>

        {/* Content */}
        <div className="pt-16 px-8">

          <h2 className='text-lg font-semibold'>
            {props.elem.username}
          </h2>

          <p className='text-xs text-gray-500 leading-snug mt-2'>
            {props.elem.profession}
          </p>

        </div>

        <div className="mt-6 border-t border-gray-200"></div>

        {/* stats */}
        <div className='grid grid-cols-3  text-center'>

          <div className='py-3 border-r border-gray-200'>
            <p className='font-semibold'>78.9k</p>
            <p className='text-xs text-gray-500'>Likes</p>
          </div>

          <div className='py-3 border-r border-gray-200'>
            <p className='font-semibold'>500</p>
            <p className='text-xs text-gray-500'>Posts</p>
          </div>

          <div className='py-3'>
            <p className='font-semibold'>900k</p>
            <p className='text-xs text-gray-500'>Views</p>
          </div>

        </div>

        {/* footer */}
        <div className='flex items-center justify-center'>
            <button 
            className='mt-2  px-2 py-1 pt-0.5 bg-red-600 rounded text-white font-semibold active:scale-95 cursor-pointer'
            onClick={() => {
                props.deleteHandler(props.index)
            }}
            >
                remove
            </button>
        </div>

    </div>
  )
}

export default Card