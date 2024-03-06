import { useState, useEffect } from "react"
import './main.css'
const App = () => {
  const [data, setData] = useState("")
  const [clicked, setClicked] = useState(false)
  
  const fetchData = async () => {
    let nasa = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
      )
    let nasaData = await nasa.json()
    setData(nasaData)
  }


  useEffect(() => {
    fetchData()
  }, [])

  if(!data) {
    return <h1>loading...</h1>
  }
  return (
    <div>
      <h1>nasa API</h1>
      <img style={{ width: '100%' }} src={data.hdurl} />
      <h4>{data.explanation}</h4>
    </div>
  )
}
export default App