
import { useContext, useEffect, useState } from 'react'
import CartRow from '../component/hero/CartRow'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {insertData} from '../services/apiBillings'
import { CartContext } from '../context/CartContext'

function Cart() {

  const [cartItems,setCartItems] = useState([])
  
  // const{count, setCount} = useContext(CartContext)

  // function extractSpecificKeyValuePairs(array, keysToExtract) {
  //   return array.map(obj => {
  //     const newObj = {};
  //     keysToExtract.forEach(key => {
  //       newObj[key] = obj[key];
  //     });
  //     return newObj;
  //   });
  // }
 
  const keyNeeded = ['Name', 'quantity', 'Price', 'Amount' ]
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []
    setCartItems(storedCartItems)
  },[])

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (reqData) => insertData(reqData),
    onSuccess: () => {
      console.log("success")
      queryClient.invalidateQueries({
        queryKey: ['billings']
      })
    },
    
  })

  function filterItems(id){
    const updatedCart = cartItems.filter((item) => item.id!==id)
    console.log(updatedCart)
    localStorage.setItem('cart',JSON.stringify(updatedCart))
    setCartItems(updatedCart)
  }

  function handlePayout(data,keysToExtract){
    console.log(data)
    const reqData = data.map(obj => {
      console.log([obj.Name])
      // setCount((prev) => ({...prev,[obj.Name]:count[obj.Name]+obj.quantity}))
      const newObj = {};
      keysToExtract.forEach(key => {
        newObj[key] = obj[key];
      });
      return newObj;
    })
    localStorage.removeItem('cart')
    console.log(reqData)
    mutate(reqData)
    location.reload()
  }


  function handleIncrease(item){
    // let CartObject = cartItems[storedIndex]
    // console.log(CartObject)
    
    // setCartItems(prevDataArray =>
    //     prevDataArray.map(item =>
    //       item.id === storedIndex ? { ...item, quantity: prevDataArray[storedIndex].quantity+=1} : item
    //     )
    //   );
    

    item.quantity+=1
    item.Amount = item.Price * item.quantity
    setCartItems([...cartItems])
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }
  function handleDecrease(item){
    if(item.quantity>=1){
    item.quantity+=-1
    item.Amount = item.Price * item.quantity
    setCartItems([...cartItems])
    localStorage.setItem('cart', JSON.stringify(cartItems))
    }
  }
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      
      <h1 className='my-10 font-Merriweather text-5xl'>Cart</h1>
        {cartItems.map((cartItem, index) => {
          return(<CartRow cartItem={cartItem} index={index} filterItems={filterItems} key={cartItem.id} handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>)
       })}
                 
      <button className='bg-red-600 mt-5 px-10 py-3 rounded-lg' onClick={() =>handlePayout(cartItems, keyNeeded)}>Payout</button>
             
    </div>
  )
}

export default Cart