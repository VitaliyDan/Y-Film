import './filmAdd.css';

const FilmAdd =()=> {
    return (
        <div className="app-add-form">
            <h3>Add film to list</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Name Film" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Raiting" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    );
}

export default FilmAdd;

