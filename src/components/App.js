import React, {useState, useEffect} from "react"

function App () {
  const [dogImage, setDogImage] = useState("")
  const [isLoaded, setIsloaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(data => {
        setDogImage(data.message)
        setIsloaded(true)
      })
  }, [])

  if (!isLoaded) return  <p>Loading...</p>
  return <img src={dogImage} alt="A Random Dog"/>
}

export default App

