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
                    <label>Cerca</label>
                    <input
                    type=""
                    value={search}
                    onChange={handleInput}
                    aria-label= "Cerca film o serie tv"
                    placeholder="Scrivi qui il tuo film o serie tv...">
                    </input>
                    <button className="" type="submit" onClick={handleSearch}>Cerca</button>
                </div>
            </div>
        </header>
    )
}

export default Header