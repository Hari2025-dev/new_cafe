import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { cartReducer } from "../../context/Reducer"
import { useQuery } from '@tanstack/react-query'
import { getSingleRow } from '../../services/apiMenu';
import toast from 'react-hot-toast';




function MenuCard({menu}) {
 console.log(menu)
  function handleClick(cartItem){
    const existingItem = JSON.parse(localStorage.getItem("cart")) || []

    const existingProductIndex = existingItem.findIndex((item) => item.id === cartItem.id)

    if(existingProductIndex !== -1){
      // existingItem[existingProductIndex].quantity +=  
      toast("This order has been already places")
    }
    else{
      existingItem.push(menu)
      toast.success("Your order has been successfully placed")
    }

    localStorage.setItem("cart", JSON.stringify(existingItem))
    console.log(JSON.parse(localStorage.getItem("cart")))
  }

  return (
    <div className='w-[270px] rounded-lg p-4 mx-auto border-2 bg-white' key={menu.id}>
      <img src={menu.img} alt={menu.Name} className='h-[240px] rounded-xl object-cover'/>
      <h2 className='text-xl py-2'>{menu.Name}</h2>
      <h3 className='py-2'>{menu.Description}</h3>
      <h2 className='py-2'>${menu.Price}</h2>
      <button className=' p-4 bg-orange-400 rounded-lg w-full' 
      onClick={() => {handleClick(menu)}}>Add to Cart</button>
    </div>
  )
}

export default MenuCard