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
        this.props.addMovie(this.state);
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
            <label>Title 
                <input name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
            <input type= "submit" value = "Add Movie" />
        </form>
    )
        }
}
export default AddMovieForm;