import { API_KEY } from "./App"
import { useEffect, useState } from 'react'

function GetMovie() {
  
  // Placeholder user input to test API response
  const userInput="titanic"  

  // The movies returned from the initial API search
  // These are the movies that can be used for comparison.   
  const [movies, setMovies] = useState("")

  // The user selected film from the initial search
  // This is the movie that will be used for comparison
  const [selectedFilm, setSelectedFilm] = useState("")
  
  const fetchMovies = () => {
    fetch(`https://similar-movies.p.rapidapi.com/search?q=${userInput}`, {
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
  useEffect(fetchMovies, []) 
  
  return (  
    <div className="Movies">
      <p>Fetched movies based on user input</p>
    </div>
  )
}
export default GetMovie