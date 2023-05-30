
const apiKey =process.env.REACT_APP_API_KEY;
const apiUrl =process.env.REACT_APP_API_URL;

const fetchMovies = async (search = '') => {
    if(search.length < 3 ) return;
    const response = await fetch(apiUrl + '?apikey=' + apiKey + '&s=' + search)
    .then(res => res.json());
    const {Error ,Search: movies} = response;
    console.log(response);
    return {movies, Error: Error ?? ''};
}

export default fetchMovies;