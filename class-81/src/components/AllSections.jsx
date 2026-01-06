import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const AllSections = (props) => {
  return (
    <div>
      <Section1 />
      <Section2 courseData={props.courseData}/>
      <Section3 />
    </div>
  )
}

export default AllSections