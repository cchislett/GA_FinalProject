import { Link } from 'react-router-dom'
function PageNotFound(){
    return(
        <div>
        <h1>Oh no, something went wrong!</h1>
        <p>This isn't the page you're looking for...</p>       
        <Link to='/'> 
            <button>Home</button>
        </Link> 
        
        </div>
    )
}
export default PageNotFound