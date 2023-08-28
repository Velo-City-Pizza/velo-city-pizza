import styles from './Items.module.scss'

const Items = ({ items, category }) => {
  if (!items || !category || !category.name || !items[category.name]) {
    return (
      <>
        <h1>Loading Items...</h1>
      </>
    )
  }

  return (
    items[category.name].map((item) => (
      <div key={item._id}>
        <h2>{item.name ?? 'Loading item...'}</h2>
      </div>
    ))
  )
  
}

export default Items 