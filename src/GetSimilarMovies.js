import { API_KEY } from "./App"
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import testSimMovies from "./mockSimMovies"
import DisplayMovie from "./DisplayMovie"

function GetSimilarMovies() {
  
  // Placeholder input to test API response
  const sourceMovie="24168-titanic"  

  // The similar movies as provided by the API.   
  const [simMovies, setSimMovies] = useState("")
  /*
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
  */

  // SET PLACEHOLDER DATA FOR TESTING
  const fetchSimMovies = () => {
    setSimMovies(...testSimMovies["movies:"])
  }

  // Get the movies
  useEffect(fetchSimMovies, [simMovies]) 
  
  return (  
    <div className="SimilarMovies">
      <h1>Similar movies to the selection</h1>
      <div>
        {simMovies !== "" &&
          simMovies.map((movie) =>
            <div>
              <DisplayMovie
                posterURL={movie.img}
                title={movie.title}
                genre={movie.genre}
                story={movie.story}
              />
            </div>
          )
        }
      </div>
      <Link to='/'> Take me home </Link> 
    </div>
  )
}
export default GetSimilarMovies