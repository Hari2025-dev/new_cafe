import React, { useContext, useEffect, useState } from 'react'
import Category from './Category'
import { CartContext } from '../../context/CartContext'
import { updateItemPrice } from '../../services/apiMenu'
import { useMutation, useQueryClient } from '@tanstack/react-query'
function AdminEdit() {
  useEffect(() => {
    
  },[])
  const{state,dispatch} = useContext(CartContext)
  const[editbox,setEditBox] = useState()
  const[editValue,setEditValue]=useState('')
  console.log(editbox)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: ({id, newValue}) => updateItemPrice(id,newValue),
    onSuccess: () => {
      console.log("success")
      queryClient.invalidateQueries({
        queryKey: ['Menu']
      })
    },
    
  })

  function handleUpdate(menu, id){
    let eValue= Number(editValue)
    let newValue = {...menu,Price:eValue}
    console.log(newValue)
    mutate({id,newValue})
  }
  return (
    <div className='w-[80vw] bg-pink-300 mx-auto pb-10'>
      
    <h1 className='block mb-10 text-center pt-20 text-4xl'>Menu for the day</h1>
    <Category />
   
    <div className='grid grid-cols-3 gap-2'>
    {state.product?.map((menu,index) => {
    
    return( 
      <div className='w-[270px] mx-auto' key={index}>
      <img src={menu.img} alt={menu.Name} className='h-[240px] rounded-xl object-cover'/>
      <h2>{menu.Name}</h2>
      {editbox!==menu.id?<div>
      <h2>${menu.Price}</h2>
      <button onClick={() =>setEditBox(menu.id)}>Edit</button>
    </div>:<div>
      <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)}/>
      <button onClick={() => {
        handleUpdate(menu, menu.id)
        setEditBox()}}>Done</button>
      </div>}
      {/* <button className=' p-4 bg-orange-400 rounded-lg w-full' 
      >Add to Cart</button> */}
    </div>
    )
    })}
    </div>
    
    

    
  </div>
  )
}

export default AdminEdit