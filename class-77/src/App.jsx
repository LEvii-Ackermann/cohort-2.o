import React, {useState} from 'react'
import axios from 'axios'

const App = () => {

  const [allData, setAllData] = useState([])
  
  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    setAllData(response.data)
    console.log(response.data)
  }
  

  return (
    <div>
      <button onClick={getData}>Get data</button>
      {allData.map((elem, idx) => {
        return <h1 key={idx}>{idx + 1}. {elem.name}</h1>
      })}
    </div>
  )
}

export default App