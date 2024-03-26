export const cartReducer = (state,action) => {
  
  switch(action.type){
    case 'FETCH_DATA':
      return{
        product:action.payload,
        cart:[]
      }
    
    case 'ADD_TO_CART':
      console.log(...state.cart,action.payload)
      return{
        ...state,
        cart:[...state.cart,action.payload]
      }  
    default:
      return state
  }
}