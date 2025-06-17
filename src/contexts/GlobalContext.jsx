// import {useState, useEffect} from "react"


// function GlobalContext() {
//     const [movie, setMovie] = useState([])

//     apiKey="05f25a38e80d3f281215e0480061a071"
//     apiUrl="https://api.themoviedb.org/3/search/movie"

//     useEffect(() => {
//             axios
//                 .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`)
//                 .then((resp) => {
//                 const movieList = resp.data
//                 console.log(movieList)
//                 setMovie(movieList)
//                 })
//     })

// }

// export {GlobalContext}