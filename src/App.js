import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Search from './Search';
import GetMovie from './GetMovie';
import GetSimilarMovies from './GetSimilarMovies'
import PageNotFound from './PageNotFound';

// API key for Rapid API
export const API_KEY = process.env.REACT_APP_MOVIES_API_KEY

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />}/>
          <Route path='/GetMovie/:movie' element={<GetMovie/>}/>
          <Route path='/GetSimilarMovies/:movie' element={<GetSimilarMovies/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
