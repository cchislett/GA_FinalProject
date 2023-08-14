import './App.css';
import { API_KEY } from './App'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import testSimMovies from './mockSimMovies'
import DisplayMovie from './DisplayMovie'
/*
  Function GetSimilarMovies
  This function uses the "find similar" API function 
  It takes a specific movie id (returned by the get movie API function)
  And returns a list of similar movies data. 
*/
function GetSimilarMovies() {
  
  // The user entered movie title
  const params = useParams()
  const sourceMovie = params.movie

  // The similar movies as provided by the API.   
  const [simMovies, setSimMovies] = useState('null')
  
  /*
  // SET PLACEHOLDER DATA FOR TESTING
    const fetchSimMovies = () => {
    setSimMovies(...testSimMovies["movies:"])
  }
  */
  // Fetch a list of similar movies to the user's selection 
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
  
  // Get the movies
  useEffect(fetchSimMovies, []) 
  
  return (  
    <div className='Movies' data-testid="Movies">

      {/* The simMovies state is null.
       /* We are waiting for a successful API call */}
      { simMovies === 'null' &&
        <div>
          <h1>Searching for similar movies...</h1>
          <h2>Please wait, this can take a few seconds. </h2>
        </div>
      }

       {/* The simMovie state isn't null but is empty.*/
       /* The API call was successful BUT returned no content */
       /* In the event no similar movies are found */ }
      { simMovies.length === 0 && <h1>Sorry, the API couldn't find any movies</h1>}

      {/* The simMovie state has content.*/
       /* The API call was successful AND returned some content */ }
      <div>
        {simMovies !== 'null' && simMovies.length !== 0 &&
        <div>
            <h1>Here are some similar movies you may enjoy.</h1>
            {simMovies.map((movie) =>
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
            )}
          </div>
        }
      </div>
      <Link to='/'><button>Home</button></Link> 
    </div>
  )
}
export default GetSimilarMovies
