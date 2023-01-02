import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component{
constructor(props){
    super(props);
    this.state = {
        searchName: ''
    }
}

    onUpdateSearch =(e)=>{
        const searchName = e.target.value;
        this.setState({searchName});
        this.props.onUpdateSearch(searchName)
    }

    render(){
        return(
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Search Film"
                value={this.state.searchName}
                onChange={this.onUpdateSearch}/>
        )
    }
}
export default SearchPanel;