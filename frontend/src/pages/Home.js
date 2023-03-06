import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.backgroundTexture}>
            <div className="headline-container">
                <h1 className="home-h1">Velo City Pizza</h1>
                <h2 className="home-h2">168 W 25th Ave</h2>
                <h2 className="home-h2">San Mateo, CA 94403</h2>
                <h2 className="home-h2">650-268-8100</h2>
                <div className="headline-btn">
                    <a href="#description">Learn More</a>
                    <a href="#order">Order Online</a>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${styles.chevronDown} bi bi-chevron-down`} viewBox="0 0 16 16" id="index-chevron-down">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
        </div>
    )
}

export default Home