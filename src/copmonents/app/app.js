import './app.css'
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../info/info';
import AppFilter from '../filter/filter';
import FilmList from '../films-list/films-list';
import FilmAddForm from '../film-add-form/film-add-form';
function App(){

    return(
        <div className='app'>
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <FilmList/>
            <FilmAddForm/>

        </div>
    )
}
export default App;