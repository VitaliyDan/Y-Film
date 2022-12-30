import FilmListItem from "../films-list-item/films-list-item"
import './film-list.css'
function FilmList({data, onDelete}){
    const element = data.map(item => {
        const {id, ...itemProp} = item;
        return <FilmListItem  key={id} {...itemProp} onDelete= {() => onDelete(id)}/>
    })
    return(
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}
export default FilmList;