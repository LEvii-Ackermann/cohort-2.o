import React from 'react'

const Card = (props) => {

  console.log(props);
  return (
    <div className='w-72 h-[390px] rounded-[30px] bg-white overflow-hidden relative'>
        
        {/* header */}
        <div className='h-32 w-full '>
          <img 
            src={props.user.coverImage}
            alt='cover'
            className='h-full w-full object-cover p-2 rounded-[30px]'
          />
        </div>

        {/* avatar */}
        <div className='absolute bg-gray-300 h-[90px] w-[90px] rounded-full border-[3px] border-white top-[88px] left-8'>
          <img 
           src={props.user.avatar}
           alt='img'
           className='h-full w-full object-cover rounded-full'
          />
        </div>

        {/* Content */}
        <div className="pt-16 px-8">

          <h2 className='text-lg font-semibold'>
            {props.user.name}
          </h2>

          <p className='text-xs text-gray-500 leading-snug mt-2'>
            {props.user.profession}
          </p>

        </div>

        <div className="mt-6 border-t border-gray-200"></div>

        {/* stats */}
        <div className='grid grid-cols-3  text-center'>

          <div className='py-3 border-r border-gray-200'>
            <p className='font-semibold'>{props.user.likes}</p>
            <p className='text-xs text-gray-500'>Likes</p>
          </div>

          <div className='py-3 border-r border-gray-200'>
            <p className='font-semibold'>{props.user.posts}</p>
            <p className='text-xs text-gray-500'>Posts</p>
          </div>

          <div className='py-3'>
            <p className='font-semibold'>{props.user.views}</p>
            <p className='text-xs text-gray-500'>Views</p>
          </div>

        </div>

        {/* footer */}
        <div className='flex  bg-gray-100 border-t border-gray-200 justify-around'>
          <div className="flex-1 py-2 text-center border-r border-gray-200">📷</div>
          <div className="flex-1 py-2 text-center border-r border-gray-200">✕</div>
          <div className="flex-1 py-2 text-center">🌐</div>
        </div>

    </div>
  )
}

export default Card