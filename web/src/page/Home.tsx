import React, { useEffect, useState } from 'react'
import productApi from '../api/productApi'
import Product from '../component/Product'

const Home = () => {
  const [products, setProducts] = useState<any>()

  useEffect(()=> {
    const main = async () => {
      try {
        const  res = await productApi.getAll()
        setProducts(res)
      } catch (error) {
          console.log("failed to fetch api", error);
      }
    }  
    main()
  }
  ,[])  
  
  return (
    <div>
      <Product products={products}/>
    </div>
  )
}

export default Home