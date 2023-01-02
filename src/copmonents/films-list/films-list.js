import FilmListItem from "../films-list-item/films-list-item"
import './film-list.css'
function FilmList({FilmDB, onDelete, onPropStatus}){
    const element = FilmDB.map(item => {
        const {id, ...itemProp} = item;
        return <FilmListItem  key={id} {...itemProp}
                onDelete= {() => onDelete(id)}
                onPropStatus= {(e)=> onPropStatus(id, e.currentTarget.getAttribute('data-status'))}
                />
    });
    return(
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}
export default FilmList;