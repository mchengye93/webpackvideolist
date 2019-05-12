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
        this.watched = this.watched.bind(this);
        this.unWatched = this.unWatched.bind(this);

    }
    //after mount call database to get data and update state to movies in db
    componentDidMount() {
        this.getAllMovies();
        //this.searchMovie('a');
    }

    getAllMovies() {
        var movies = [];
        console.log('inside get all movies!');
        axios.get('/movielist')
        .then((data)=> {
            console.log('axios get',data.data);
            movies = data.data;
            this.setState({movies : data.data});
        })
        this.setState({movies: movies});
    }

    searchMovie(searchTitle){
        var movies= [];
        axios.get('/searchMovie',{
        params: {
            title: searchTitle
        }})
        .then((response) => {
            console.log(response.data);
            movies = response.data;
            this.setState({movies: response.data});
           
        })
        .catch(function(error) {
            console.log(error);
        })
        this.setState({movies:movies});
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
    watched(){
        var movies = [];
        axios.get('/watchMovies',{params: {
            watched: true
        }}).then((results)=>{
            console.log(results.data);
            movies = results.data;
            this.setState({movies: results.data});
        })
        this.setState({movies: movies})
    }

    unWatched(){
        var movies = [];
        axios.get('/watchMovies',{params: {
            watched: false
        }}).then((results)=>{
            console.log(results.data);
            movies = results.data;
            this.setState({movies: results.data});
        })
        this.setState({movies: movies})
    }

    render() {
        if (this.state.movies.length === 0){
            return(
            <div>
                <AddMovieForm addMovie ={this.addMovie}/>
                <SearchMovieForm searchMovie={this.searchMovie}/>
                <button onClick={this.watched}></button>Watched<button onClick={this.unWatched}>To watch</button>
                <div>Sorry no movies!</div>
            </div>
            )
        }
        else {
            return (
            <div>
                <AddMovieForm addMovie ={this.addMovie}/>
                <SearchMovieForm searchMovie={this.searchMovie}/>
                <button id="watched "onClick={this.watched}>Watched</button><button onClick={this.unWatched}>To watch</button>
                <MovieList movies = {this.state.movies} toggleWatch={this.toggleWatch} />
            </div>
        )
        }
    }

}
export default App;