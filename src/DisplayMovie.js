import './App.css';
/*
    Function DisplayMovie
    This function simply displays individual movie detail
    Currently only used by the GetSimilarMovies function
*/
function DisplayMovie({posterURL, title, story, genre, style, duration}){
  return (
    <div className='Movie'>          
      <img height='300' src = {posterURL} alt='film poster'/>
      <div>
        <h2>{title}</h2>
        <p>{story}</p>
        <p>Genre: {genre}</p>
        <p>Style: {style}</p>
        <p>Duration: {duration}</p>
      </div>
    </div>
  )
}
export default DisplayMovie
