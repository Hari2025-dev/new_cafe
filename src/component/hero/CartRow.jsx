import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa";
function CartRow({cartItem, index, filterItems, handleIncrease, handleDecrease}) {

  //  function handleQuantity(id,op){
  //   // let storedItem =  JSON.parse(localStorage.getItem('cart'))
  //   // let storedItemIndex = storedItem.findIndex((item) => item.id === id)
  //   // console.log(storedItemIndex)
  //   // if(op==='add'){
  //   //   updateCartQuantity(storedItemIndex)
  //   //   storedItem[storedItemIndex].quantity+=1
  //   // }
  //   // if(op==='sub'){
  //   //   storedItem[storedItemIndex].quantity+=1
  //   // }
  //   // localStorage.setItem('cart', JSON.stringify(storedItem))
  // }

  return (
    <div className="flex gap-8 justify-center items-start py-2 border-b">
      <h2 className='flex-1'>{index+1}</h2>
      <h2 className='flex-1'><img src={cartItem.img} alt="" className='w-[20rem] '/></h2>
      <h2 className='w-[20rem] '>{cartItem.Name}</h2>
      <div className='flex gap-2 flex-1'>
      <button className=' bg-teal-500 p-1' onClick={() =>handleDecrease(cartItem)}>-</button>
      <h2 className=''>{cartItem.quantity}</h2>
      <button className=' bg-teal-500 p-1' onClick={() =>handleIncrease(cartItem)}>+</button>
      </div>
      <h2 className='flex-1'>{cartItem.Amount}</h2>
      <h2 className=''></h2>
      <h2 className='flex-1' onClick={() => filterItems(cartItem.id)}><FaTrash /></h2>
    </div>
  )
}

export default CartRow