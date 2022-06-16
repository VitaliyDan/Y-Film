import FilmItem from "../film-item/filmItem";

const FilmList =({data})=> {
   
    const elements = data.map(item =>{
        const {id, ...itemProps} = item;
      return <FilmItem key={id} {...itemProps}/>
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul> 
    )
}

export default FilmList;