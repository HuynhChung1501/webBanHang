import React from 'react'
import ProductCard from './ProductCard'

const Product = ({ products }: any) => {
    console.log('log',products);
    
  return (
    <div>
        {
            products.map((value:any) => (
                <ProductCard key={value._id} products={products }/>
            ))
        }
    </div>
  )
}

export default Product