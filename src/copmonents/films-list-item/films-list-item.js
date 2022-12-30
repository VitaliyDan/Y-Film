import './film-list-item.css';
import { Component } from 'react';
class FilmListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            best: false,
            save: false,
        }

    }

    bestFilm =()=>{
        this.setState(({best}) => ({best: !best}));
    }

    MySaved =()=>{
        this.setState(({save})=> ({save: !save}));
    }

    render(){
        const {name, rating, onDelete} = this.props,
              {best, save} = this.state;
        let classListGroup = "list-group-item d-flex justify-content-between";
        if (best){
            classListGroup += ' increase';
        }
        if(save){
            classListGroup += ' like';
        }
     return (
         <li className= {classListGroup} >
             <span onClick={this.MySaved} className="list-group-item-label">{name}</span>
             <input type="text" className="list-group-item-input" defaultValue={rating + ' ★'}/>
             <div className= "d-flex justify-content-center align-items-center">
                 <button type="button"
                        onClick={this.bestFilm}
                        className="btn-cookie btn-sm ">
                     <i className="fas fa-cookie"></i>
                 </button>
 
                 <button type="button"
                    onClick = {onDelete}
                         className="btn-trash btn-sm ">
                     <i className="fas fa-trash"></i>
                 </button>
                 <i className="fas fa-star"></i>
             </div>
         </li>
     )
    }

}

export default FilmListItem;