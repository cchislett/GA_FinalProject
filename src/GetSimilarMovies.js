import { API_KEY } from "./App"
import { useEffect, useState } from 'react'

function GetSimilarMovies() {
  
  // Placeholder input to test API response
  const sourceMovie="24168-titanic"  

  // The similar movies as provided by the API.   
  const [simMovies, setSimMovies] = useState("")
 
  const fetchSimMovies = () => {
    fetch(`https://similar-movies.p.rapidapi.com/similar?id=${sourceMovie}`, {
      headers: {
        'X-RapidAPI-Host': 'similar-movies.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY
      },
    })
    .then(res => res.json())
    .then(data => {console.log(data)})
    .catch(err => { console.log(err)})
  }
  // Get the movies
  useEffect(fetchSimMovies, []) 
  
  return (  
    <div className="SimilarMovies">
      <p>Fetched similar movies to the provided movie</p>
    </div>
  )
}
export default GetSimilarMovies