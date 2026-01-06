import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [profession, setProfession] = useState('')

  const localData = JSON.parse(localStorage.getItem('old-users')) || []
  const [allUsers, setAllUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault()
    const oldUsers = [...allUsers]
    oldUsers.push({username, image, profession})

    setAllUsers(oldUsers)
    localStorage.setItem("old-users", JSON.stringify(oldUsers))
    
    setUsername('')
    setImage('')
    setProfession('')
  }

  const deleteHandler = (index) => {
    const copyUsers = [...allUsers]
    copyUsers.splice(index, 1)

    setAllUsers(copyUsers)
    localStorage.setItem("old-users", JSON.stringify(copyUsers))
  }

  return (
    <div>
      <form 
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex flex-col gap-10 m-10'
      >
        <input 
          type='text' 
          required
          value={username}
          placeholder='Enter your name' 
          className='px-6 py-4 border-2 border-emerald-600 rounded'
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />

        <input 
          type='text' 
          value={image}
          required
          placeholder='Enter your image' 
          className='px-6 py-4 border-2 border-emerald-600 rounded'
          onChange={(e) => {
            setImage(e.target.value)
          }}
        /> 

        <input 
          type='text' 
          required
          value={profession}
          placeholder='Enter your profession' 
          className='px-6 py-4 border-2 border-emerald-600 rounded'
          onChange={(e) => {
            setProfession(e.target.value)
          }}
        />               

        <button 
          className='px-6 py-4 border-2 border-emerald-600 cursor-pointer rounded'
        >
          Submit
        </button>
      </form>

      <div className="p-10 flex flex-wrap gap-8">
        {allUsers.map((elem, index) => (
          <Card
            key={index}
            index={index}
            elem={elem}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default App