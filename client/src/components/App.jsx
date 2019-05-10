const React = require('react');
import axios from 'axios';

import MovieList from './MovieList.jsx';
import AddMovieForm from './AddMovieForm.jsx';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { movies: []};

        this.getAllMovies = this.getAllMovies.bind(this);
        this.searchMovie = this.searchMovie.bind(this);

    }
    //after mount call database to get data and update state to movies in db
    componentDidMount() {
        this.getAllMovies();
        this.searchMovie('a');
    }

    getAllMovies(){
        axios.get('/movielist')
        .then((data)=> {
            //console.log(data);
            this.setState({movies : data.data});
        })
    }

    searchMovie(searchTitle){

        axios.get('/searchMovie',{
        params: {
            title: searchTitle
        }})
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    addMovie(title) {
        console.log(title);
        // axios.post('/addMovie', title)
        // .then((response)=> {

        //     //if get response update all movies
        //     this.getAllMovies();
        // })
    }

    render() {
        
        return (
            <div>
                <AddMovieForm addMovie ={this.addMovie}/>
                <MovieList movies = {this.state.movies} />
            </div>
        )
    }

}
export default App;