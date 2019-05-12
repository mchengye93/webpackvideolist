const React = require('react');

class SearchMovieForm extends React.Component {
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
        var searchTitle = this.state.title;
        this.setState({title:""});
        this.props.searchMovie(searchTitle);
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
                <input name="title" placeholder="search movie..." value={this.state.title} onChange={this.handleChange} />
            </label>
            <input type= "submit" value = "Search" />
        </form>
    )
        }
}
export default SearchMovieForm;