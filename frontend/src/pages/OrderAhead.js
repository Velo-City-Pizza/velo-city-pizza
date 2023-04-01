import styles from './OrderAhead.module.scss'
import { useEffect, useState } from 'react'

// Section Components
// import Description from 'components/home/Description'

const OrderAhead = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const fetchCategories = async() => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/admin/catalog/category`)
      const json = await response.json()

      if (response.ok) {
        if (process.env.NODE_ENV === 'development') {
          console.log(json)
        }
        setCategories(json)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className={styles.orderAhead}>
      <div className="navbarBuffer"></div>
      <div className='categories'>
        {categories && categories.map((category) => (
          <p key={category._id}>{category.name}</p>
        ))}
      </div>
    </div>
  )
}

export default OrderAhead