import {useState, useEffect} from "react"
import axios from "axios"


function Main() {
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState("")

    const apiKey="05f25a38e80d3f281215e0480061a071"
    const apiUrl="https://api.themoviedb.org/3/search/movie"

    useEffect(() => {
            axios
                .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`)
                .then((resp) => {
                const movieList = resp.data
                console.log(movieList)
                setMovie(movieList)
                })
    }, [])

    const handleInput = (event) => {
        event.preventDefault()
        setSearch(event.target.value)
    }



    return (
        <main>
            <form onSubmit={handleInput}>
                <label>Cerca il tuo film</label>
                <input
                type=""
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Movie"
                ></input>
                <button type="submit">Cerca</button>
            </form>
            <div>
                {movie.map((curFilm))}
            </div>
        </main>
    )

}

export default Main