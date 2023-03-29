import styles from './Home.module.scss'

// Section Components
import Header from 'components/home/Header'
import Order from 'components/home/Order'
import Description from 'components/home/Description'

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />
            <Order />
            <Description />
        </div>
    )
}

export default Home