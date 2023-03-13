import styles from './Home.module.scss'

// Section Components
import Header from 'components/home/Header'
import Order from 'components/home/Order'

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Order />
        </div>
    )
}

export default Home