import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { add,remove } from '../redux/slices/CartSlice'
import { useSelector } from 'react-redux'

const Product = ({post}) => {


  const cart = useSelector((state) => state.Cart)
  const dispatch = useDispatch();

  const addToCart = () => {
      dispatch(add(post))
      toast.success("Added To Cart");
  }

  const removeFromCart = () => {
      dispatch(remove(post.id))
      toast.success("Removed From Cart");
  }
 
  return (
      <div className='flex flex-col items-center justify-between hover:scale-105 transition-all duration-300 ease-in gap-3 p-4 mt-10 rounded-xl
       hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
          <div>
             <p className='text-gray-700 font-semibold text-lg truncate w-40 text-left mt-1'>{post.title}</p>
          </div>

          <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] '>{post.description.split(" ").slice(0,10).join(" ") +"..."}</p>
          </div>

          <div className='h-[180px]'>
             <img className='w-full h-full' src={post.image} alt="" />
          </div>


        <div className='flex gap-12 mt-5 '>
          <div>
             <p className='text-green-600 font-semibold'>${post.price}</p>
          </div>
          
          {
            cart.some((item) => item.id === post.id) ?
            <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition-all duration-300' onClick={removeFromCart}>
                Remove Item
            </button>   :

            <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white transition-all duration-300' onClick={addToCart}>
                Add To Cart
            </button>
          }

        </div>
          
      </div>
  )
}

export default Product