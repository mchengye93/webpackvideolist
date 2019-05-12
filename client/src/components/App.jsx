const React = require('react');
import axios from 'axios';

import MovieList from './MovieList.jsx';
import AddMovieForm from './AddMovieForm.jsx';
import SearchMovieForm from './SearchMovieForm.jsx';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { movies: []};

        this.getAllMovies = this.getAllMovies.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.toggleWatch = this.toggleWatch.bind(this);

    }
    //after mount call database to get data and update state to movies in db
    componentDidMount() {
        this.getAllMovies();
        //this.searchMovie('a');
    }

    getAllMovies() {
        console.log('inside get all movies!');
        axios.get('/movielist')
        .then((data)=> {
            console.log('axios get',data);
            
            this.setState({movies : data.data});
        })
    }

    searchMovie(searchTitle){
        
        axios.get('/searchMovie',{
        params: {
            title: searchTitle
        }})
        .then((response) => {
            console.log(response.data);
            this.setState({movies: response.data});
           
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    addMovie(title) {
        console.log('called addMoive from client!',title);
         axios.post('/addMovie', title)
         .then(this.getAllMovies);
    
    }
    toggleWatch(movieId){
        console.log('toggleWatch called for ', movieId);
        
        axios.post('/toggleWatch', {id:movieId})
        .then(this.getAllMovies);
    }

    render() {
        if (this.state.movies.length === 0){
            return(
            <div>
                <AddMovieForm addMovie ={this.addMovie}/>
                <SearchMovieForm searchMovie={this.searchMovie}/>
                <div>Sorry no movies!</div>
            </div>
            )
        }
        else {
            return (
            <div>
                <AddMovieForm addMovie ={this.addMovie}/>
                <SearchMovieForm searchMovie={this.searchMovie}/>
                <MovieList movies = {this.state.movies} toggleWatch={this.toggleWatch} />
            </div>
        )
        }
    }

}
export default App;