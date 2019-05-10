const React = require('react');
const Movie = (props) =>{
    console.log(props);
    return (
        <div id="movie">
        <strong>Title:</strong> <span>{props.movie.title}</span>
        </div>
    )
}
export default Movie;