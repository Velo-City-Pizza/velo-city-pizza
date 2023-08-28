import styles from './Categories.module.scss'
import React from 'react'

const Categories = ({ children, categories }) => {
  if (!categories) {
    return (
      <>
        <h1>Loading Categories...</h1>
        {children}
      </>
    )
  }

  return (
    categories.map((category) => (
      <div key={category._id}>
        <h1>{category.name ?? 'Loading category name...'}</h1>
        {/* Must clone child to pass category as prop */}
        {React.cloneElement(children, {category})}
      </div>
    ))
  )
  
}

export default Categories 