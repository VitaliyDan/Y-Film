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
                    { id: 1 , filmName:'Sumer', rating: 5, best: false, saved: false},
                    { id: 2 , filmName:'Out Days', rating: 4, best: false, saved: false},
                    { id: 3 , filmName:'Timbernborn', rating: 12, best: false, saved: false},
                    { id: 4 , filmName:'Dark Soul', rating: 11, best: false, saved: false},
                    { id: 5 , filmName:'House', rating: 10, best: false, saved: false}
                ],
                searchName: '',
                filter: 'all'
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
            rating,
            best: false,
            saved: false
        }
        this.setState(({FilmDB}) => {
            const newArr = [...FilmDB, newItem];
            return {
                FilmDB: newArr
            }
        });
    }

    onPropStatus =(id, prop)=> {
        this.setState(({FilmDB}) => ({
            FilmDB: FilmDB.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }

    searchFilm =(items, searchName)=> {
            if(searchName.length === 0){
                return items;
            }
            return items.filter(item => {
                return item.filmName.indexOf(searchName) > -1
            })
    }
    onUpdateSearch =(searchName)=>{
        this.setState({searchName});
    }

    filterPanel =(items, filter)=>{
        switch(filter){
            case "best": 
                return items.filter(item => item.best);
            case "saved":
                return items.filter(item => item.saved);
            default: return items;
        }
    }

    onFilterSelect =(filter)=>{
        this.setState({filter});
    }

    render(){
        const allFilms = this.state.FilmDB.length,
              {FilmDB, searchName,filter} = this.state,
              allBestFilm = FilmDB.filter(item => item.best).length,
              searching = this.filterPanel(this.searchFilm(FilmDB, searchName), filter);
        return(
            <div className='app'>
                <AppInfo allFilms = {allFilms}
                         allBestFilm ={allBestFilm}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch= {this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <FilmList 
                FilmDB={searching}
                onDelete = {this.deleteFilm}
                onPropStatus = {this.onPropStatus}
                />
                <FilmAddForm onAddFilm = {this.addNewFilm}/>
    
            </div>
        )
    }
}
export default App;