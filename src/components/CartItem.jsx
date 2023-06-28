import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice'
import { toast } from 'react-hot-toast'

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
       dispatch((remove(item.id)));
       toast.success('Removed From Cart');
  }
  return (
      <div className='flex flex-row justify-evenly p-[20px] gap-10 items-center border-b-4 border-slate-200 '>
         <div className=''>
            <img className='w-[250px] ' src={item.image} alt="" />
         </div>

         <div className='flex flex-col gap-[1rem]'>
            <h1 className='max-w-[300px] text-slate-600 font-bold '>{item.title}</h1>
            <h1  className=' text-gray-500 font-semibold'>{item.description.slice(0,69)+"..."}</h1>
            <div className='flex flex-row justify-between items-center '>
               <p className='text-green-600 font-bold'>${item.price}</p>
                         
         <button  className='w-[50px] h-[50px] bg-red-200 rounded-full flex justify-center items-center' onClick={removeFromCart}>
              <AiFillDelete fill='red'/>
         </button>
            </div>

           
         </div>
         
          
         

      </div>
  )
}

export default CartItem