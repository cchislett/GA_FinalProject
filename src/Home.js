import {Link} from 'react-router-dom'
function Home(){
    return(
        <div>
        <h1>Home Page </h1>
        <p>Welcome</p>       
        <Link to='/GetMovie'> Get a movie </Link> 
        <Link to='/GetSimilarMovies'> Get similar movies </Link> 
        <Link to='/PageNotFound'> Get ya 404 here ! </Link> 
        </div>
    )
}
export default Home