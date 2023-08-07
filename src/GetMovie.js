import './App.css';
import { API_KEY } from "./App"
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"

import testMovies from "./mockMovies"

function GetMovie() {

  // The user entered movie title
  const params = useParams()

  // Placeholder user input to test API response
  const userInput="titanic"  

  // The movies returned from the initial API search
  // These are the movies that can be used for comparison.   
  const [movies, setMovies] = useState("")

  // The user selected film from the initial search
  // This is the movie that will be used for comparison
  const [selectedFilm, setSelectedFilm] = useState("")
  /*
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
  */

    // SET PLACEHOLDER DATA FOR TESTING
  const fetchMovies = () => {
    setMovies(...testMovies["movies:"])
  }
  
  // Get the movies
  useEffect(fetchMovies, []) 
  
  return (  
    <div className="Movies">
      <h1>Movies matching {params.movie}</h1>
      <h2>Select the movie you wish use for your search</h2>
      {movies !== "" &&
        movies.map((res) =>
            <div>
              <p>{res.movie}</p>
            </div>
          )
      }
      <Link to='/'> 
        <button>Home</button>
      </Link> 

      <Link to='/GetSimilarMovies'> 
        <button>Show Similar</button>
      </Link> 

    </div>
  )
}
export default GetMovie