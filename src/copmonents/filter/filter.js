import './filter.css';
function AppFilter(){
    return(
        <div className="btn-group">
            <button className="btn btn-light" type="button">All Films</button>
            <button className="btn btn-outline-light" type="button">The Best Films</button>
            <button className="btn btn-outline-light" type="button">Your Saved</button>
        </div>
    )
}
 export default AppFilter;