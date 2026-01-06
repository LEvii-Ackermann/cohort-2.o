import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Course3 = () => {
  const courseData = useContext(UserContext)

  return (
    <div>
      So in this we used Context Api - {courseData}
    </div>
  )
}

export default Course3