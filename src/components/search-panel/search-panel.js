import { Component } from 'react';
import './search-panel.css';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp : ""
        }
    }
    UpdateSearch =(elem)=> {
        const temp = elem.target.value;
        this.setState({temp});
        this.props.UpdateSearch(temp);
    }
    render (){

        return(
            <input 
                type="text" 
                className="form-control search"
                placeholder="Search your film"
                onChange = {this.UpdateSearch}/>
                )
    }
}

export default Search;