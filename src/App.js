import './App.css';
import {Link, NavLink, Routes, Route} from 'react-router-dom'
import Home from './Home';
import GetMovie from './GetMovie';
import GetSimilarMovies from './GetSimilarMovies'
import PageNotFound from './PageNotFound';

// API key for Rapid API
export const API_KEY = process.env.REACT_APP_MOVIES_API_KEY

// <GetMovie />
// <GetSimilarMovies />

function App() {
  return (
    <div className="App">
      <div className="main-navbar">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/GetMovie' element={<GetMovie/>}/>
          <Route path='/GetSimilarMovies' element={<GetSimilarMovies/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
