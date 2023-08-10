import './App.css';
import { API_KEY } from './App'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import testMovies from './mockMovies'

function GetMovie() {

  let navigate = useNavigate()

  // The user entered movie title
  const params = useParams()
  const userInput = params.movie

  // The movies returned from the initial API search
  // These are the movies that can be used for comparison.   
  const [movies, setMovies] = useState('null')
 
  
  // SET PLACEHOLDER DATA FOR TESTING
    const fetchMovies = () => {
    setMovies(...testMovies["movies:"])
  }


  /*
  const fetchMovies = () => {
    fetch(`https://similar-movies.p.rapidapi.com/search?q=${userInput}`, {
      headers: {
        'X-RapidAPI-Host': 'similar-movies.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY
      },
    })
    .then(res => res.json())
    .then(data => {setMovies(...data["movies:"])})
    .catch(err => { console.log(err)})
  }
  */
 
  const handleClick = (res) => {
    navigate(`/GetSimilarMovies/${res.id}`)
  }

  // Get the movies
  useEffect(fetchMovies, []) 
  
  return (  
    <div className='GetMovies'>

      {/* The movie state is null.
       /* We are waiting for a successful API call */}
      { movies === 'null' &&
        <div>
          <h1>Searching for {params.movie}.</h1>
          <h2> Please wait, this can take a few seconds. </h2>
        </div>}

      {/* The movie state isn't null but is empty.*/
       /* The API call was successful but returned no content */
       /* The API couldn't find the user's movie query */ }
      { movies.length === 0 && <h1>Sorry, the API couldn't find {params.movie}</h1>}
      
      {/* The movie state has content.*/
       /* The API call was succesful and returned some content */ }
      { movies !== 'null' && movies.length !== 0 &&
        <div> 
          <h1>Movies matching {params.movie}</h1>
          <h2>Select the movie you'd like to use for your similar search</h2>

          {movies.map((res) =>
            <div className='GetMovie' onClick={() => handleClick(res)}>
              <>{res.movie}</>
            </div>
          )}
        </div>
      }
      <Link to='/'> 
        <button>Home</button>
      </Link> 
    </div>
  )
}
export default GetMovie