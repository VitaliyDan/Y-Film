import './app.css';
import Info from '../footer/footer';
import Search from '../search-panel/search-panel';
import Filter from '../app-filter/filter';
import FilmList from '../film-list/filmList';
import FilmAdd from '../film-add/filmAdd';

function App(){
    const data = [
        {name:'Harry Porter', rating:'12', increase: true, id: 1},
        {name:'Sunset', rating:'10', increase: false, id: 2},
        {name:'Summer', rating:'5', increase: true, id: 3},
        {name:'Echo', rating:'12', increase: true, id: 4}

    ]

    return (
        <div className="app">
            <Info/>
            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>
            <FilmList data={data}/>
            <FilmAdd/>
        </div>
    );
}

export default App;