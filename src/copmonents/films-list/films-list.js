import FilmListItem from "../films-list-item/films-list-item"
import './film-list.css'
function FilmList(){
    return(
        <ul className="app-list list-group">
            <FilmListItem/>
            <FilmListItem/>
            <FilmListItem/>
        </ul>
    )
}
export default FilmList;