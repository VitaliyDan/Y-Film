import { Component } from 'react';
import './film-add-form.css'
class FilmAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            filmName: '',
            rating: '',
        }
    }
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        const {filmName, rating} = this.state;
        e.preventDefault();
        if(filmName.length > 3 && filmName.length < 15 && +rating >= 1 && rating <=10){
            this.props.onAddFilm(this.state.filmName, this.state.rating);
            this.setState({
                filmName: '',
                rating: ''
            })
        }
    }
    render(){
        const {filmName, rating} = this.state;
        return (
            <div className="app-add-form">
                <h3 className='textColor'>Add new film</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        onChange={this.onValueChange}
                        value={filmName}
                        data-total={filmName}
                        name="filmName"
                        className="form-control new-post-label"
                        placeholder="Film name" />
                    <input type="number"
                        onChange={this.onValueChange}
                        value={rating}
                        data-total = {rating}
                        name="rating"
                        className="form-control new-post-label"
                        placeholder="rating" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}
export default FilmAddForm;