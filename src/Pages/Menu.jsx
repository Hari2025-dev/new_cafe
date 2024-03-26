
import React, { useContext, useEffect, useState } from 'react'

import MenuCard from '../component/hero/MenuCard'
import Category from '../component/hero/Category'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'




function Menu() {
  
  const[search, setSearch] = useState("")
  const{state,dispatch} = useContext(CartContext)
  const[filter, setFilter] = useState("")
  const[filteredItem, setFilteredItem] = useState([])
  console.log(state)
   

  useEffect(() => {
    function  updateItems(){
    const newItem = state.product
    setFilteredItem(newItem)
    }
    updateItems()
  },[state])

  useEffect(() => {
    const newItems=state.product.filter((item) =>item.Cuisine?.includes(filter))
    setFilteredItem(newItems)
    console.log(newItems)
    
  }, [filter])

  useEffect(() => {
    const newItems = state.product.filter((item) =>item.Name?.includes(search))
    setFilter('')
    setFilteredItem(newItems)
  },[search])

  console.log(filteredItem)
  
  return (
    <div className='bg-pink-300'>
    <div className='w-[80vw] mx-auto'>
      
      <h1 className='block mb-10 text-center pt-16 text-5xl font-Merriweather'>Menu for the day</h1>
      <Category setFilter={setFilter}/>
      <input type="text" placeholder='search food' className='block mx-auto w-[300px] my-10 p-2 rounded-lg' onChange={(e) => setSearch(e.target.value)} value={search}/>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
      {filteredItem.map((menus,index) => {
      
      return( <MenuCard menu={menus} key={index}  />)
      })}
      </div>

      <Link to="/cart" className='flex justify-center items-center'><button className='my-5 px-6 py-3 rounded-lg bg-green-200'>CheckOut</button></Link>
      
    </div>
    </div>
  )
}

export default Menu