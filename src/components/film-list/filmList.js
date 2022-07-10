import FilmItem from "../film-item/filmItem";

const FilmList =({data, onDelete, ToggleIncrease})=> {
   
    const elements = data.map(item =>{
      const {id, ...itemProps} = item;
      return <FilmItem
       key = {id}
       {...itemProps} 
       onDelete= {()=> onDelete(id)}
       ToggleIncrease = {()=> ToggleIncrease(id)}
       />
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
}

export default FilmList;