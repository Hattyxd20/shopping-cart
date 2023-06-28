import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FiShoppingCart} from "react-icons/fi"
import { useSelector } from 'react-redux'
import logo  from './logo.png'

const Navbar = () => {
  const cart = useSelector(state => state.Cart)
  return (

    <nav className='flex flex-row justify-between h-20 max-w-[900px] items-center mx-auto'>

    <NavLink to="/">
       <div  className='ml-5'>
         <img className='w-[120px]' src={logo} alt="" />
       </div>
     </NavLink>  

       <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
         <NavLink to="/">
              Home
         </NavLink>

         <NavLink to="/cart">
            <div className='relative'>
              <FiShoppingCart fill='white' className='text-2xl' />
              {
                cart.length > 0 && 
                        <span className='absolute top-[-20%] right-[-35%] bg-green-600 text-sm w-5 h-5 rounded-full flex items-center justify-center
                        animate-bounce text-white '>{cart.length}</span>
              }
                 
            </div>  
         </NavLink>
       </div>

        
    </nav>

  )
}

export default Navbar