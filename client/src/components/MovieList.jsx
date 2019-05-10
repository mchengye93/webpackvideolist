const React = require('react');
import Movie from './Movie.jsx'
const MovieList = (props) => {
    console.log (props);
    return (
        <div id="movieList">
            {props.movies.map((movie)=> (
                <Movie movie={movie} />
            ))}
        </div>
    )
}
export default MovieList;