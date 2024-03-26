import {Outlet} from 'react-router-dom'
import CartContextProvider from '../../context/CartContext'

function ContextLayout() {
  return (
    <CartContextProvider>
      <Outlet />
    </CartContextProvider>
  )
}

export default ContextLayout