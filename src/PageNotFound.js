import {Link} from 'react-router-dom'
function PageNotFound(){
    return(
        <div>
        <h1>Something went wrong!</h1>
        <p>This isn't the page you're looking for</p>       
        <Link to='/'> Take me home </Link> 
        </div>
    )
}
export default PageNotFound