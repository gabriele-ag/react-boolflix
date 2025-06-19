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
                    <video autoPlay loop muted plays-inline="true" className="hero-video">
                        <source src="/Cyberpunk Edgerunners — Official Teaser  Netflix.mp4" type="video/mp4"/>
                    </video>
                <div className="container hero-box">
                    <h1 className="hero-title">Cyberpunk: Edgerunners</h1>
                    <p className="hero-text m-top-10 m-bottom-20">Cyberpunk: Edgerunners narra una storia in 10 episodi di un solitario da strada che cerca di sopravvivere in una città del futuro ossessionata dalla tecnologia e dalle modifiche cibernetiche. Con tutto da perdere, decide di sopravvivere diventando un edgerunner, un fuorilegge mercenario noto anche come cyberpunk</p>
                    <button className="hero-button m-top-20">Scopri di più</button>
                    <button className="hero-button-2">Guarda ora</button>
                </div>
            </section>

            <section className="section-search">
                <div className="card-section">
                    <h2 className="category-title m-bottom-30">Film</h2>
                    <div className="box flex">
                        {movie.length > 0 ? (movie.map((curMovie, index) => (
                            <div className="card" key={index}>
                                <img className="img-poster" src={`${apiImg}/w342${curMovie.poster_path}`} alt="img-movie" />
                                <div className="card-onhover">
                                    <h2 className="title-content m-bottom-20">Nome del film: {curMovie.title}</h2>
                                    {curMovie.title !== curMovie.original_title && (
                                    <span className="m-bottom-10">Titolo originale: {curMovie.original_title}</span>
                                    )}
                                    <p className="text-card m-bottom-10">{curMovie.overview}</p>
                                    <FlagImg language={curMovie.original_language}/>
                                    <StarVote vote={curMovie.vote_average}/>  
                                    <button className="btn-details">Dettagli</button>                                
                                </div>
                            </div>
                            ))) : search && (<p className="no-result-text">Nessun risultato</p>)
                        }
                    </div>
                    <h2 className="category-title m-top-50 m-bottom-30">Serie Tv</h2>
                    <div className="box flex">
                        {tvseries.length > 0 ? (tvseries.map((curSerie, index) => (
                            <div className="card" key={index}>
                                <img src={`${apiImg}/w342${curSerie.poster_path}`} alt="img-movie" />
                                <div className="card-onhover">
                                    <h2 className="title-content m-bottom-20">Nome della serie tv: {curSerie.name}</h2>
                                    {curSerie.name !== curSerie.original_name && (
                                    <span className="m-bottom-10">Titolo originale: {curSerie.original_name}</span>
                                    )}
                                    <p className="text-card m-bottom-10">{curSerie.overview}</p>
                                    <FlagImg language={curSerie.original_language}/>
                                    <StarVote vote={curSerie.vote_average}/>
                                    <button className="btn-details">Dettagli</button>
                                </div>
                            </div>
                        ))) : search && (<p className="no-result-text">Nessun risultato</p>)
                        }
                    </div>
                </div>
            </section>
            
        </main>
    )

}

export default Main