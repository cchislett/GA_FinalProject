import './App.css';
import { API_KEY } from './App'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import testSimMovies from './mockSimMovies'
import DisplayMovie from './DisplayMovie'

function GetSimilarMovies() {
  
  // The user entered movie title
  const params = useParams()
  const sourceMovie = params.movie

  // Placeholder input to test API response
  //const sourceMovie='24168-titanic'  

  // The similar movies as provided by the API.   
  const [simMovies, setSimMovies] = useState('')
  
  const fetchSimMovies = () => {
    fetch(`https://similar-movies.p.rapidapi.com/similar?id=${sourceMovie}`, {
      headers: {
        'X-RapidAPI-Host': 'similar-movies.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY
      },
    })
    .then(res => res.json())
    .then(data => {setSimMovies(...data["movies:"])})
    .catch(err => { console.log(err)})
  }
  
  /*
  // SET PLACEHOLDER DATA FOR TESTING
  const fetchSimMovies = () => {
    setSimMovies(...testSimMovies["movies:"])
  }
 */

  // Get the movies
  useEffect(fetchSimMovies, []) 
  
  return (  
    <div className='Movies'>
      <h1>You selected {params.movie}</h1>
      <h1>Here are some other movies that you may enjoy.</h1>
      <div>
        {simMovies !== '' &&
          simMovies.map((movie) =>
            <div>
              <DisplayMovie
                posterURL={movie.img}
                title={movie.title}
                story={movie.story}
                genre={movie.genre}
                style={movie.style}
                duration={movie.duration}
              />
            </div>
          )
        }
      </div>

      <Link to='/'> 
        <button>Home</button>
      </Link> 

    </div>
  )
}
export default GetSimilarMovies