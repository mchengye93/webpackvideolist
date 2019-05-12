const React = require('react');
import Movie from './Movie.jsx'
const MovieList = (props) => {
    //console.log (props);
    return (
        <div id="movieList">
        <h2>MovieList</h2>
            {props.movies.map((movie)=> (
                <Movie movie={movie} toggleWatch={props.toggleWatch} />
            ))}
        </div>
    )
}
export default MovieList;