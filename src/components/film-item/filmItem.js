import {Component} from 'react'
import './filmItem.css';

class FilmItem extends Component  {
    constructor(props){
        super(props);
        this.state= {
            increase: false,
        }

    }

    status =()=> {
        this.setState(({increase}) => ({
            increase : !increase
        }))
    }
    
    render(){
        const {name, rating, onDelete } = this.props;
        const {increase} = this.state;
        let clssName = "list-group-item d-flex justify-content-between";
        if(increase){
            clssName  += " increase like";
        }
        return (
            <li className= {clssName}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={rating}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick= {this.status} >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
    }
}
export default FilmItem;