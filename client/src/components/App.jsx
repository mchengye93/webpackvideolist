const React = require('react');
import axios from 'axios';

import MovieList from './MovieList.jsx';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { movies: []};

        this.getAllMovies = this.getAllMovies.bind(this);

    }
    //after mount call database to get data and update state to movies in db
    componentDidMount() {
        this.getAllMovies();
    }

    getAllMovies(){
        axios.get('/movielist')
        .then((data)=> {
            console.log(data);
            this.setState({movies : data.data});
        })
    }

    render() {
        
        return (
            <div>
                <MovieList movies = {this.state.movies} />
            </div>
        )
    }

}
export default App;