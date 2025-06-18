import {useContext} from "react"
import FlagImg from "../components/propImg"
import StarVote from "./propStarVote"
import { GlobalContextProvider } from "../contexts/GlobalContext"
// import SearchContent from "./propSearch"

function Main() {


    const {movie, tvseries, search} = useContext(GlobalContextProvider)
    const apiImg= "https://image.tmdb.org/t/p/"


    return (
        <main>
            <section className="hero-section">
                <div className="container hero-box">
                    <h1 className="hero-title">Cyberpunk: Edgerunners</h1>
                    <p className="hero-text m-top-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, minima, perferendis iste magnam dolor quia, explicabo libero quisquam ipsum ad qui ea! Quas ex mollitia deserunt consequatur dignissimos asperiores doloribus?</p>
                    <button className="hero-button m-top-20">Scopri di più</button>
                    <button className="hero-button-2">Guarda ora</button>
                </div>
            </section>

            <section className="section-search">
                <div className="card-box container flex">
                    <div>
                        {movie.length > 0 ? (movie.map((curMovie, index) => (
                            <div className="card" key={index}>
                                <img src={`${apiImg}/w342${curMovie.poster_path}`} alt="img-movie" />
                                <div className="card-onhover">
                                    <h2>Nome del film: {curMovie.title}</h2>
                                    {curMovie.title !== curMovie.original_title && (
                                    <p>Titolo originale: {curMovie.original_title}</p>
                                    )}
                                    <FlagImg language={curMovie.original_language}/>
                                    <StarVote vote={curMovie.vote_average}/>
                                </div>
                            </div>
                            ))) : search && (<p>Nessun risultato</p>)
                        }
                    </div>
                    <div>
                        {tvseries.length > 0 ? (tvseries.map((curSerie, index) => (
                            <div className="card" key={index}>
                                <img src={`${apiImg}/w342${curSerie.poster_path}`} alt="img-movie" />
                                <div className="card-onhover">
                                    <h2>Nome della serie tv: {curSerie.name}</h2>
                                    {curSerie.name !== curSerie.original_name && (
                                        <p>Titolo originale: {curSerie.original_name}</p>
                                    )}
                                    <FlagImg language={curSerie.original_language}/>
                                    <StarVote vote={curSerie.vote_average}/>
                                </div>
                            </div>
                        ))) : search && (<p>Nessun risultato</p>)
                        }
                    </div>
                </div>
            </section>
            
        </main>
    )

}

export default Main