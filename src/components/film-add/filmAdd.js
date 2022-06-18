import { Component } from 'react';
import './filmAdd.css';

class FilmAdd extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: '',
            rating: '',

        }
    }

    addFilm =(item)=> {
        this.setState({
            [item.target.name] : item.target.value
        })
    }

    render (){
        const {name, rating} = this.state;
        return (
            <div className="app-add-form">
                <h3>Add film to list</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name Film"
                         onChange= {this.addFilm}
                        name= "name"
                        value={name} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Raiting"
                         onChange= {this.addFilm}
                        name= "rating"
                        value={rating} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
}

export default FilmAdd;

