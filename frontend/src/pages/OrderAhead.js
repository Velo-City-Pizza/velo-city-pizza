import styles from './OrderAhead.module.scss'
import { useEffect, useState } from 'react'

// Section Components
import Categories from 'components/order_ahead/Categories'
import Items from 'components/order_ahead/Items'

const OrderAhead = () => {
  const [categories, setCategories] = useState(null)
  const [items, setItems] = useState({})
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const fetchCategories = async() => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/admin/catalog/category`,
          {signal}
        )
        const json = await response.json()
  
        if (response.ok) {
          if (process.env.NODE_ENV === 'development') {
            console.log(json)
          }
          setCategories(json)
        }
      }
      catch (e) {
        if (e.name === 'AbortError')
          console.log('Fetch aborted')
        else
          console.log(e)
      }
    }
    fetchCategories()
    return () => {
      controller.abort()
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchItems = async() => {
      if (!categories) return
      // For every category, fetch its items
      for (const category of categories) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/admin/catalog/item/${category._id}`,
            {signal}
          )
          const json = await response.json()
          if (response.ok) {
            if (process.env.NODE_ENV === 'development')
            console.log(json)
          }
          else console.log("OrderAhead.js Error: Couldn't fetch items from category")
          // If category.name doesn't exist already, append it to items
          setItems(prevItems => ({
            ...prevItems,
            [category.name]: json
            }
          ))
        }
        catch (e) {
          if (e.name === 'AbortError')
            console.log('Fetch aborted')
          else
            console.log(e)
        }
      }
    }
  fetchItems()
  return () => {
    controller.abort()
  }
  }, [categories])

  return (
    <div className={styles.orderAhead}>
      <div className="navbarBuffer"></div>
      <div className={styles.categories}>
        <Categories categories={categories}>
          <Items
            items={items}
            categories={categories}
          />
        </Categories>
      </div>
    </div>
  )
}

export default OrderAhead