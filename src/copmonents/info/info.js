import './info.css'
const AppInfo =({allFilms, allBestFilm})=> {
    return(
        <div className="app-info">
        <h1 className='textColor'>Y&Film</h1>
        <h2 className='textColor'>All Films: {allFilms}</h2>
        <h2 className='textColor'>The Best Films: {allBestFilm}</h2>
        </div>
    )
}

export default AppInfo;