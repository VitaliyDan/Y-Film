import './film-list-item.css';
function FilmListItem (props) {

        const {filmName, rating, onDelete, onPropStatus, best, saved} = props;
        let classListGroup = "list-group-item d-flex justify-content-between";
        if (best){
            classListGroup += ' increase';
        }
        if(saved){
            classListGroup += ' like';
        }
     return (
         <li className= {classListGroup} >
             <span onClick={onPropStatus} className="list-group-item-label" data-status= "saved">{filmName}</span>
             <input type="text" className="list-group-item-input" defaultValue={rating + ' ★'}/>
             <div className= "d-flex justify-content-center align-items-center">
                 <button type="button"
                        onClick={onPropStatus}
                        data-status= "best"
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

export default FilmListItem;