import FilmItem from "../film-item/filmItem";

const FilmList =({data, onDelete})=> {
   
    const elements = data.map(item =>{
      const {id, ...itemProps} = item;
      return <FilmItem key = {id} {...itemProps} onDelete= {()=> onDelete(id)}/>
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
}

export default FilmList;