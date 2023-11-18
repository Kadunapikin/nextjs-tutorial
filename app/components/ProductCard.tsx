// 'use client'
import React from 'react'
import AddToCard from './AddToCard'
import style from './ProductCard.module.css';


const ProductCard = () => {
  return (
    <div>
        <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-700'>
            <h2>Products Cart</h2>
        </div>
        <div className={style.card}>
            <AddToCard />
        </div>
    </div>
  )
}

export default ProductCard