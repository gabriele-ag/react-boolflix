import { NavLink } from "react-router-dom"

function Header () {
   
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
            </div>
        </header>
    )
}

export default Header