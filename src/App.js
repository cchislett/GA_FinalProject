import './App.css';
import GetMovie from './GetMovie';

// API key for Rapid API
export const API_KEY = process.env.REACT_APP_MOVIES_API_KEY

function App() {
  return (
    <div className="App">
    <h1>Hi</h1>
    
    <GetMovie />

    </div>
  );
}

export default App;
