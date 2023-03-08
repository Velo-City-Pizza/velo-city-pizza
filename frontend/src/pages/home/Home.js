import styles from './Home.module.scss'
import ChevronDown from 'components/ChevronDown'

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.headlineContainer}>
                <h1>Velo City Pizza</h1>
                <h2>168 W 25th Ave</h2>
                <h2>San Mateo, CA 94403</h2>
                <h2>(650) 268-8100</h2>
                <div className={styles.headlineBtns}>
                    <a href="#order">Order Online</a>
                    <a href="#description">Learn More</a>
                </div>
            </div>
            <a href="/#order">
                {/* Note: classname is a parameter of ChevronDown, not the keyword className */}
                <ChevronDown classname={styles.chevronDown}/>
            </a>
        </div>
    )
}

export default Home