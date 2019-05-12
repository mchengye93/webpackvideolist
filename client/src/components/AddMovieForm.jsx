const React = require('react');

class AddMovieForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        var movie = this.state;
        this.setState({title:""});
        this.props.addMovie(movie);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label> 
                <input name="title" placeholder="add movie..."value={this.state.title} onChange={this.handleChange} />
            </label>
            <input type= "submit" value = "Add Movie" />
        </form>
    )
        }
}
export default AddMovieForm;