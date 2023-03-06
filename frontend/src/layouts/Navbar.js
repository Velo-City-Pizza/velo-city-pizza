import { useState } from 'react'

const Navbar = () => {
    const logo = require('../assets/img/velo_city_logo.png');
    const [expandMenu, setExpandMenu] = useState(false)

    function expandMobileMenu() {
        setExpandMenu(!expandMenu)
    }

    return (
        <nav className="navbar">
            <a className="nav-logo" href="/"><img src={logo} /></a>
            <a className ="nav-name" href="/">Velo City Pizza</a>
            <div className="mobile-burger" onClick={expandMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className={`nav-links${expandMenu ? ' active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/order_ahead">Order</a></li>
                <li><a href="/menu">Menu</a></li>
            </ul>
            
        </nav>

    )
}

export default Navbar