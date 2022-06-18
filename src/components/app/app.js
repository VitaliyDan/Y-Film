import { Component } from 'react';
import './app.css';
import Info from '../footer/footer';
import Search from '../search-panel/search-panel';
import Filter from '../app-filter/filter';
import FilmList from '../film-list/filmList';
import FilmAdd from '../film-add/filmAdd';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name:'Harry Porter', rating:'12',  id: 1},
                {name:'Sunset', rating:'10',  id: 2},
                {name:'Summer', rating:'5', id: 3},
                {name:'Echo', rating:'12', id: 4}

        
            ]
        }
    }

    deleteItem =(id)=> {
        this.setState(({data})=>{
                  return{
                     data: data.filter(item=> item.id !== id)
                    }
        })
    }
  render(){
    
    return (
        <div className="app">
            <Info/>
            <div className="search-panel">
                <Search/>
                <Filter/>
            </div>
            <FilmList data={this.state.data}
                      onDelete={this.deleteItem}/>
            <FilmAdd/>
        </div>
    );
  }
}

export default App;