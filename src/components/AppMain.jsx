import {useState, useEffect} from "react"
import axios from "axios"


function Main() {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [error, setError] = useState(false)

    const apiKey="05f25a38e80d3f281215e0480061a071"
    const apiUrl="https://api.themoviedb.org/3/search/movie"

    useEffect(() => {
            axios
                .get(`${apiUrl}?api_key=${apiKey}&query=${query}`)
                .then((resp) => {
                const movieList = resp.data.results
                console.log(movieList)
                setMovie(movieList)
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

                <label>Cerca il tuo film</label>
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
                            <h2>Nome del film: {curMovie.title}</h2>
                        </div>
                    ))}
                </div>
            
        </main>
    )

}

export default Main