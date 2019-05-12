const React = require('react');
class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            movie: this.props.movie
        }
        this.toggleWatch = this.toggleWatch.bind(this);
    }
    toggleWatch(event){
        event.preventDefault();
        console.log('moviecalled toggle watch for', this.state.movie.id);
        this.props.toggleWatch(this.state.movie.id);
    }
    
    render(){
        
        if (this.state.movie.watched){
        return (
            <div id="movie">
            <span>{this.state.movie.title}</span><button onClick={this.toggleWatch}>Watched</button>
            </div>
        ) 
    } else{
        return (
            <div id="movie">
            <span>{this.state.movie.title}</span><button onClick={this.toggleWatch}>To Watch</button>
            </div>
        )
    }
}

}
export default Movie;