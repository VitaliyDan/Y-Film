import { Component } from 'react';

import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../info/info';
import AppFilter from '../filter/filter';
import FilmList from '../films-list/films-list';
import FilmAddForm from '../film-add-form/film-add-form';

import './app.css'

class App extends Component {
    constructor(props){
            super(props);
            this.state ={
                FilmDB: [
                    { id: 1 , name:'Sumer', rating: 5},
                    { id: 2 , name:'Out Days', rating: 4},
                    { id: 3 , name:'Timbernborn', rating: 12}
                ]
            }
    }

    deleteFilm =(id)=>{
        this.setState(({FilmDB})=> {
            return {FilmDB: FilmDB.filter(item => item.id !== id)}
        })
    }

    render(){
        return(
            <div className='app'>
                <AppInfo/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <FilmList 
                data={this.state.FilmDB}
                onDelete = {this.deleteFilm}/>
                <FilmAddForm/>
    
            </div>
        )
    }
}
export default App;