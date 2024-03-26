import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState, createContext, useReducer, useEffect } from "react"
import { cartReducer } from "./Reducer"
import { getMenu } from "../services/apiMenu"


export const CartContext = createContext()

function CartContextProvider(props){
  // const[count,setCount] = useState({
  //   'BBQ Chicken Pizza':0,
  //   'Margherita Pizza':0,
  //   'Chow Mein Noodles':0,
  //   'French Fries' :0,
  //   'Pasta':0,
  //   'Hawaiian Pizza':0,
  //   'Bacon cheeseburger':0,
  //   'Pepperoni Pizza':0,
  //   'Buffalo burger':0
  // })
  const {status,data} = useQuery({
    queryKey:['Menu'],
    queryFn:getMenu
  })
 
  useEffect(() => {
    if(status==="success"){
      dispatch({type:'FETCH_DATA', payload:data})
    }
  },[status])
  
  const[state,dispatch] = useReducer(cartReducer,{product:[{}],cart:[]})

  
  return(<CartContext.Provider value={{state,dispatch}}>
    {props.children}
  </CartContext.Provider>)
}

export default CartContextProvider