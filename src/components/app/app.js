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
                {name:'Harry Potter', rating:'12', increase: false, id: 1},
                {name:'Sunset', rating:'10',increase: false, id: 2},
                {name:'Summer', rating:'5',increase: false, id: 3},
                {name:'Echo', rating:'12',increase: false, id: 4}
            ],
            temp : ""
            
        }
        this.maxId = 5;
    }

    addItem = (name, rating) => {
        const newItem = {
            name, 
            rating,
            increase: false,
            id: this.maxId ++
          }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    ToggleIncrease =(id)=> {
            this.setState (({data}) => ({
                data: data.map(item=>{
                    if(item.id === id){
                        return {...item, increase: !item.increase}
                    }
                    return item;
                })
            }))
    }

    deleteItem =(id)=> {
        this.setState(({data})=>{
                  return{
                     data: data.filter(item=> item.id !== id)
                    }
        })
    }

    searchFilm =(items, temp)=> {
        if(temp.length === 0){return items};
        return items.filter(item =>{
            return item.name.indexOf(temp) > -1;
        })
    }
    UpdateSearch =(temp)=> {
        this.setState({temp});
    }

  render(){
    const {data, temp} = this.state, 
         visibleData = this.searchFilm(data, temp),
         AllFilms = this.state.data.length,
         BestFilms = this.state.data.filter(item => item.increase).length;
          
    
    return (
        
        <div className="app">
            <Info AllFilms={AllFilms}
                  BestFilms= {BestFilms}/>
            <div className="search-panel">
                <Search UpdateSearch = {this.UpdateSearch}/>
                <Filter/>
            </div>
            <FilmList data={visibleData}
                      
                      onDelete={this.deleteItem}
                      ToggleIncrease= {this.ToggleIncrease}
                      />
            <FilmAdd onAdd={this.addItem}/>
        </div>
    );
  }
}

export default App;