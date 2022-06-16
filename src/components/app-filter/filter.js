import './filter.css'

const Filter =()=> {
    return(
        <div className="btn-group">
            <button
             className="btn btn-light"
             type ="button">
                 All Films
            </button>
            <button
             className="btn btn-outline-light"
             type ="button">
                 Favorite Films
            </button>
            <button
             className="btn btn-outline-light"
             type ="button">
                 Filter by raiting
            </button>
        </div>
    );
}

export default Filter;