import React from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <div className='text-3xl underline absolute text-white  top-1/2 left-1/2 -translate-1/2'>
        <h1>Course Page</h1>
        <div>
            <Link to="/course/: id">Cohort</Link>
        </div>
    </div>
  )
}

export default Course