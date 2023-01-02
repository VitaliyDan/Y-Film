import './filter.css';
function AppFilter(props){
    
    const buttonsGroup = [
        {name: 'all', label: 'All Films'},
        {name: 'best', label: 'The Best Films'},
        {name: 'saved', label: 'Your Saved'}
    ];
    const buttons = buttonsGroup.map(({name, label})=> {
        const active = props.filter === name,
              clazz = active ? 'btn-light' : 'btn-outline-light';
        return <button className={`btn ${clazz}`} type="button" key={name} onClick ={()=> props.onFilterSelect(name)}>{label}</button>
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>
    )
}
 export default AppFilter;