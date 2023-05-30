import { useEffect, useState } from 'react';
import './App.css';
const apiKey = '80deeacb';
const apiUrl = 'https://www.omdbapi.com';

const fetchMovies = async (search = 'The godfather') => {
  const response = await fetch(apiUrl + '?apikey=' + apiKey + '&s=' + search)
  .then(res => res.json());
  const {Search: movies, totalResults: totalCount} = response;
  console.log(response);
  return {movies, totalCount}
}

function App() {
  const [movies, setMovies] = useState([]);
  const [totalCount, setTotalCount] = useState(0)
  
  useEffect(() => {
    const callApy = async () => {
      const data = await fetchMovies();
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    }
    callApy();
  
    return () => {
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY FAVOURITE MOVIES</h1>
        <ul>
          {movies.map( movie => <li key={movie.imdbID}>{movie.Title}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
