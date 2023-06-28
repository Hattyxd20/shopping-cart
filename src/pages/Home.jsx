import React, { useEffect, useState } from 'react'

import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {

  const url = "https://fakestoreapi.com/products/"
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data =  await response.json();
        console.log(data);
        setPosts(data);
        
      } catch (error) {
         alert(error);
         setPosts([]);
      }

      setLoading(false);
  }

  useEffect( () => {
      fetchProducts();
  },[])
  return (
      <div>

        {
           loading ? <Spinner/> : 
          <div  className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  max-w-6xl mx-auto p-2 space-y-10 space-x-5 min-h-[80vh] '>
             {
               posts.map( (post) => { 
                   return <Product post={post} />
               })
             }
          </div>
        }
             
      </div>
  )
}

export default Home