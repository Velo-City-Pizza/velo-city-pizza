import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="background"></div>
            {children}
            <Footer />
        </>
    )
}

export default Layout