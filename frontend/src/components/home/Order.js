import styles from './Order.module.scss'

const Order = () => {
  return (
    <section id="order" class={styles.order}>
      <h1>Order Now</h1>
      <div className={styles.orderOptions}>
        <a id={styles.pickup} href="/order_ahead">Store Pickup</a>
        <a id={styles.delivery} href="https://www.grubhub.com/restaurant/velo-city-pizza-168-w-25th-ave-san-mateo/1458011">Delivery</a>
      </div>
    </section>
  )
}

export default Order