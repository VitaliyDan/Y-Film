import './footer.css';

const Info =({AllFilms,BestFilms})=> {
    return (
        <div className="footer">
            <h1>Your Libary Films</h1>
            <h2>All films :  {AllFilms}</h2>
            <h2>Favorite films:  {BestFilms}</h2>
        </div>
    );
}

export default Info;