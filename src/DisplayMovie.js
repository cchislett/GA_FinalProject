import './App.css';
function DisplayMovie({posterURL, title, story, genre, style, duration}){
    return(
        <div className='Movie'>          
            <img height='300' src = {posterURL} alt='film poster'/>
            <div>
                <h2>{title}</h2>
                <p>{story}</p>
                <h4>Genre: {genre}</h4>
                <h4>Style: {style}</h4>
                <h4>Duration: {duration}</h4>
            </div>
        </div>
    )
}
export default DisplayMovie
