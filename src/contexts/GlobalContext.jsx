import { createContext, useState} from "react";
import axios from "axios";

export const GlobalContextProvider = createContext()

export const UseContent = ({children}) => {

    const [movie, setMovie] = useState([])
    const [tvseries, setTvSeries] = useState([])
    const [search, setSearch] = useState("")

    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl ="https://api.themoviedb.org/3/search/movie"
    const apiUrl2 = "https://api.themoviedb.org/3/search/tv"

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

    const handleInput = (event) => setSearch(event.target.value);

    const handleSearch = () => {
        searchFilm()
        searchTvSeries()
    }


    return (
        <GlobalContextProvider.Provider value={{
                movie,
                tvseries,
                search,
                handleInput,
                handleSearch
            }}>
                {children}
        </GlobalContextProvider.Provider>
    )
}