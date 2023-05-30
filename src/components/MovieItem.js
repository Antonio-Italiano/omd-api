import './MovieItem.css';

const MovieItem = ({movie}) => {

    return (
    <div className="col p-0 my-3 mx-1.">
        <a href={'movies/' + movie.imdbID}>
            <figure>
                <img src={movie.Poster} alt={movie.Title}/>
            </figure>
            <div className="info text-center p-2">
                <h1 className="title mb-1">{movie.Title}</h1>
            </div>
        </a>
    </div>
    );
}
export default MovieItem;