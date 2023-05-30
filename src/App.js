import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/Movie/MovieList';
import Header from './components/NavBar/Header';
import fetchMovies from './utils';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const callApi = async (search = '') => {
    const data = await fetchMovies(search);
    setError(data.Error);
    if(!data.Error.length ){
      setMovies(data.movies);
    } else {
      setMovies([]);
    }
  }

  useEffect(() => {
    
    callApi('india');
  
    return () => {
    }
  }, [])
  
  return (
    <div className="App">
        <Header onSearchChange = {callApi}/>
        <h1>MY FAVOURITE MOVIES</h1>
        {
          !error ? <MovieList movies={movies}/> : <h2>{error}</h2>
        }
        
    </div>
  );
}

export default App;
