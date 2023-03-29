import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const logo = require('assets/img/velo_city_logo.png');
    const [expandMenu, setExpandMenu] = useState(false)

    function expandMobileMenu() {
        setExpandMenu(!expandMenu)
    }

    return (
        <nav className='navbar'>
            <Link to='/' className='nav-logo'><img src={logo} alt='Velo City Logo'/></Link>
            <Link to='/' className ='nav-name' href='/'>Velo City Pizza</Link>
            <div className='mobile-burger' onClick={expandMobileMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
                {/* Adds or removes 'active' class based on state of expandMenu */}
            <ul className={`nav-links${expandMenu ? ' active' : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/order_ahead'>Order</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
            </ul>
            
        </nav>

    )
}

export default Navbar