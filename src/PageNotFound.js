import './App.css';
import { Link } from 'react-router-dom'
/*
  Page for routing errors
*/
function PageNotFound(){
  return(
    <div>
      <h1>Oh no, something went wrong!</h1>
      <h2>This isn't the page you're looking for...</h2>       
      <Link to='/'><button>Home</button></Link> 
    </div>
  )
}
export default PageNotFound