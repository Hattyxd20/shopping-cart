import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem'


const Cart = () => {

  
  const cart = useSelector((state) => state.Cart);
  console.log(cart);

  const [totalAmount,setTotalAmount] = useState(0);

 
   useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])
 
  


  return (
      <div>
         {
          cart.length > 0 ? 

          <div className='max-w-[900px] mx-auto mt-4 p-5 flex flex-row gap-10'  > 
            <div className='flex flex-col items-center gap-2 justify-center'>
               {
                cart.map( (item,index) => {
                   
                    return <CartItem key={item.id} item={item} />
                })
               }
            </div>

            <div className='w-full mt-10 flex flex-col gap-[380px]'>
                <div>
                   <div className='uppercase text-green-800 font-bold text-sm mt-2 '>Your Cart</div>
                   <div className='font-bold  text-2xl text-green-400  uppercase mt-[-1]'>Summary</div>
                   <p><span className='font-semibold text-sm'>Total Items:{cart.length}</span></p>
                </div>


                <div>
                   <p>Total Amount:{totalAmount}</p>
                   <button className='w-full bg-green-600 rounded-sm text-white py-2 mt-4 font-bold'>
                      CheckOut Now
                   </button>
                </div>
                 
            </div> 
             
           
          </div> 

          
          :
          <div className='h-[100vh] w-full flex justify-center items-center'>
          <div className='flex flex-col items-center gap-3 w-[100px]'>
             <h1  className='font-normal  text-slate-800'>Cart is Empty</h1>
             <Link to="/">
                 <button className='font-bold text-white p-2 bg-green-600 w-full rounded-md '>
                   Shop Now
                 </button>
             </Link>
            </div>
          </div>
         }
       
        


       
      </div>
  )
}

export default Cart