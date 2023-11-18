// 'use client'
import React from 'react'
import AddToCard from './AddToCard'
import style from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div className={style.card}>
        <h2>Products Cart</h2>
        <AddToCard />
    </div>
  )
}

export default ProductCard