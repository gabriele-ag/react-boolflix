import {useState} from "react"
import axios from "axios"
import FlagImg from "../components/propImg"
import StarVote from "./propStarVote"

function Main() {


    const [movie, setMovie] = useState([])
    const [tvseries, setTvSeries] = useState([])
    const [search, setSearch] = useState("")
    // const [error, setError] = useState(false)

    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl="https://api.themoviedb.org/3/search/movie"
    const apiUrl2 = "https://api.themoviedb.org/3/search/tv"
    const apiImg= "https://image.tmdb.org/t/p/"

    const searchFilm = () => {
        if (search) {
            axios
                .get(`${apiUrl}?api_key=${apiKey}&query=${search}`)
                .then((resp) => {
                const movieList = resp.data.results
                console.log(`Ecco la lista dei film`, movieList)
                setMovie(movieList)
                })
        }
    }

    const searchTvSeries = () => {
        if (search) {
        axios
            .get(`${apiUrl2}?api_key=${apiKey}&query=${search}`)
            .then((resp) => {
            const seriesList = resp.data.results
            console.log(`Ecco la lista delle serie tv`, seriesList)
            setTvSeries(seriesList)
            })
        }
    }

    const handleInput = (event) => {
        setSearch(event.target.value)
    }

    const handleSearch = () => {
        searchFilm()
        searchTvSeries()
    }


    return (
        <main>
                <label>Cerca il tuo film o la serie tv</label>
                <input
                type=""
                value={search}
                onChange={handleInput}
                aria-label= "Cerca film o serie tv"
                placeholder="Scrivi qui il tuo film o serie tv..."
                ></input>
                <button type="submit" onClick={handleSearch}>Cerca</button>

            
                <div>
                    {movie.length > 0 ? (movie.map((curMovie, index) => (
                        <div key={index}>
                            <img src={`${apiImg}/w342${curMovie.poster_path}`} alt="img-movie" />
                            <h2>Nome del film: {curMovie.title}</h2>
                            {curMovie.title !== curMovie.original_title && (
                            <p>Titolo originale: {curMovie.original_title}</p>
                            )}
                            <FlagImg language={curMovie.original_language}/>
                            <StarVote vote={curMovie.vote_average}/>
                        </div>
                        ))) : (<p>Nessun risultato</p>)
                    }
                </div>
                <div>
                    {tvseries.map((curSerie, index) => (
                        <div key={index}>
                            <img src={`${apiImg}/w342${curSerie.poster_path}`} alt="img-movie" />
                            <h2>Nome della serie tv: {curSerie.name}</h2>
                            {curSerie.name !== curSerie.original_name && (
                                <p>Titolo originale: {curSerie.original_name}</p>
                            )}
                            <FlagImg language={curSerie.original_language}/>
                            <StarVote vote={curSerie.vote_average}/>
                        </div>
                    ))}
                </div>
            
        </main>
    )

}

export default Main