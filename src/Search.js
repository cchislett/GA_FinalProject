import './App.css';
import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
/*
  The dedault home page
  This function obtains a user query for the initial movie search
*/
function Search(){   

  let navigate = useNavigate()
    
  // User generated query state handling
  const [query, setQuery] = useState('')
    
  // Handle the user input
  const handleSubmit = event => {
    event.preventDefault()
    // Prevent the user submitting an empty query
    if (query !== ''){
      navigate(`/GetMovie/${query}`)
    }
  }

  return(
    <div className='SearchPage'>
      <h1>Similar Movies Finder</h1>
      <h3>Enter the title of a movie for which you'd like to find similar movies.</h3>       
      <h3>It doesn't have to be exact. You'll get a chance to confirm your choice.</h3>
         
      <form className='SearchForm'>
        <div>
          <input type="text"
            className='TextInput'
            label='Enter a movie title'
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>
        </div>
      </form>
      <Outlet/>
    </div>
  )
}
export default Search