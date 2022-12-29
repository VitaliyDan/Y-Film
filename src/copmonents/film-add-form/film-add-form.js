import './film-add-form.css'
function FilmAddForm (){
    return (
        <div className="app-add-form">
            <h3 className='textColor'>Add new film</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Film name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Raiting" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}
export default FilmAddForm;