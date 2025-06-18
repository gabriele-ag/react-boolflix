// import { NavLink } from "react-router-dom"
// import SearchContent from "./propSearch"
import { GlobalContextProvider } from "../contexts/GlobalContext"
import { useContext } from "react"

function Header () {

    const {handleInput, handleSearch, search} = useContext(GlobalContextProvider);
   
    return (
        <header>
            <div className="flex header-nav">
                <img className="logo-nav" src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
                <div className="flex nav-link">
                    <a href="">Home</a>
                    <a href="">Film</a>
                    <a href="">Serie Tv</a>
                    <a href="">Documentari</a>
                </div>

                <div className="flex input-div">
                    <input
                    type=""
                    value={search}
                    onChange={handleInput}
                    aria-label= "Cerca film o serie tv"
                    placeholder="Cerca il tuo film o serie tv..."
                    className="search-input">
                    </input>
                    <button className="search-button" type="submit" onClick={handleSearch}>Cerca</button>
                </div>
            </div>
        </header>
    )
}

export default Header