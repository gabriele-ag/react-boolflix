import {useState, useEffect} from "react"
import axios from "axios"
import FlagImg from "../components/propImg"



function Main() {
    const [movie, setMovie] = useState([])
    const [tvseries, setTvSeries] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [error, setError] = useState(false)

    const apiKey="05f25a38e80d3f281215e0480061a071"
    const apiUrl="https://api.themoviedb.org/3/search/movie"
    const apiUrl2 = "https://api.themoviedb.org/3/search/tv"
    const apiImg= "https://image.tmdb.org/t/p/"

    useEffect(() => {
            axios
                .get(`${apiUrl}?api_key=${apiKey}&query=${query}`)
                .then((resp) => {
                const movieList = resp.data.results
                console.log(`Ecco la lista dei film`, movieList)
                setMovie(movieList)
                })
    }, [query])

     useEffect(() => {
            axios
                .get(`${apiUrl2}?api_key=${apiKey}&query=${query}`)
                .then((resp) => {
                const seriesList = resp.data.results
                console.log(`Ecco la lista delle serie tv`, seriesList)
                setTvSeries(seriesList)
                })
    }, [query])
    

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        if (search) {
            setQuery(search)
        }
    }

    return (
        <main>

                <label>Cerca il tuo film o la serie tv</label>
                <input
                type=""
                value={search}
                onChange={handleInput}
                placeholder="Search Movie"
                ></input>
                <button type="submit" onClick={handleSearch}>Cerca</button>

            
                <div>
                    {movie.map((curMovie, index) => (
                        <div key={index}>
                            <img src={`${apiImg}/w342${curMovie.poster_path}`} alt="img-movie" />
                            <h2>Nome del film: {curMovie.title}</h2>
                            {curMovie.title !== curMovie.original_title && (
                                <p>Titolo originale: {curMovie.original_title}</p>
                            )}
                            <FlagImg language={curMovie.original_language}/>
                            <p>Voto: {curMovie.vote_average}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {tvseries.map((curSerie, index) => (
                        <div key={index}>
                            
                            <h2>Nome della serie tv: {curSerie.name}</h2>
                            {curSerie.name !== curSerie.original_name && (
                                <p>Titolo originale: {curSerie.original_name}</p>
                            )}
                            <FlagImg language={curSerie.original_language}/>
                            <p>Voto: {curSerie.vote_average}</p>
                        </div>
                    ))}
                </div>
            
        </main>
    )

}

export default Main