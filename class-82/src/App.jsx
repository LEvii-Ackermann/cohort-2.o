import React from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar>
        <h1>Hello</h1>
      </Navbar>
      <Sections />
      <Footer />
    </div>
  )
}

export default App