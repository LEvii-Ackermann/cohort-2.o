import React from 'react'
import Course2 from './Course2'
import Course3 from './Course3'

const Course = (props) => {
  return (
    <div>
      <Course2 courseData={props.courseData}/>
      <Course3 />
    </div>
  )
}

export default Course