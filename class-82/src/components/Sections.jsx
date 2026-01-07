import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Sections = () => {
    const contextData = useContext(UserDataContext)
  return (
    <div className='bg-zinc-700 flex-1 p-3'>Sections {contextData}</div>
  )
}

export default Sections