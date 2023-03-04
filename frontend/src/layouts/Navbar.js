
const Navbar = () => {
    const logo = require('../assets/img/velo_city_logo.png');
    return (
        <nav className="navbar">
            <a class="nav-logo" href="/"><img src={logo} /></a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/order_ahead">Order</a></li>
            </ul>
            <div className="mobile-menu">
                <p>Menu</p>
            </div>
        </nav>

    )
}

export default Navbar