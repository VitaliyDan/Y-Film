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
                    { id: 1 , filmName:'Sumer', rating: 5},
                    { id: 2 , filmName:'Out Days', rating: 4},
                    { id: 3 , filmName:'Timbernborn', rating: 12},
                    { id: 4 , filmName:'Dark Soul', rating: 10},
                    { id: 5 , filmName:'House', rating: 8}
                ]
            }
            this.maxIdValue = 6;
    }

    deleteFilm =(id)=>{
        this.setState(({FilmDB})=> {
            return {FilmDB: FilmDB.filter(item => item.id !== id)}
        })
    }
    addNewFilm = (filmName, rating) => {
        const newItem = {
            id: this.maxIdValue++,
            filmName, 
            rating
        }
        this.setState(({FilmDB}) => {
            const newArr = [...FilmDB, newItem];
            return {
                FilmDB: newArr
            }
        });
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
                <FilmAddForm onAddFilm = {this.addNewFilm}/>
    
            </div>
        )
    }
}
export default App;