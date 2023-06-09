import MovieItem from "./MovieItem";

const MovieList = ({movies}) => {
  
    return (
        <div className="row justify-content-center">
            
          {
            movies.map(movie => <MovieItem key={movie.imdbID} movie={movie}/> )
          }
        </div>
    );
}
export default MovieList;