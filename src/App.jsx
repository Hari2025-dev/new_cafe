import { useContext, useEffect, useState } from "react"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import { getMenu } from "./services/apiMenu"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from "./Pages/Login"
import CartContextProvider, { CartContext } from "./context/CartContext"
import Cart from "./Pages/Cart"
import ContextLayout from "./component/hero/ContextLayout"
import Register from "./component/hero/Register"
import SignIn from "./component/hero/SignIn"
import Success from './component/hero/Success'
import supabase from "./services/supabase"
import AdminEdit from "./component/hero/AdminEdit"
import AdminBilling from "./component/hero/AdminBilling"
import { Toaster } from "react-hot-toast"
import NotAuth from "./Pages/NotAuth"
import {Outlet} from 'react-router-dom'
// import AdminProtect from "./component/hero/AdminProtect"
function App() {

 
  const[token,setToken] = useState(false)
  const[role,setRole] = useState('')

  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        
      },
    },
})

console.log(token)


// console.log(data)
// Still => { id: 'd0714948', name: 'Jane' }

if(token){
  sessionStorage.setItem('token',JSON.stringify(token))
  
}

useEffect(() => {
  if(sessionStorage.getItem('token')){
    let data = JSON.parse(sessionStorage.getItem('token'))
    setToken(data)
  }
  
}, [])

useEffect(() => {
  
  async function fetchRole(){
  try{
    const { data, error } = await supabase.from('user').select('*').single()
    if(error) throw error
    setRole(data)
    console.log(data)
    
    
  }
  catch(error){
    console.log(error)
  }}
  fetchRole()
},[])

console.log(token)
console.log(role[0])
  

  
  
  return (
    
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<SignIn setToken={setToken} />}/>
                <Route path="/home" element={<Home />}/>
                <Route element={<UserAuth token={token}/>}>
                  <Route path="/takeaway" element={<Menu />}/>
                  <Route path="/signup" element={<Register />}/>
                  <Route path="/cart" element={<Cart />}/>
                </Route>
                <Route element={<AdminProtect role={role}/>}>
                  <Route path="admin" element={<AdminEdit />}/>
                  <Route path="adminBilling" element={<AdminBilling />}/>
                </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
        </CartContextProvider>     
    </QueryClientProvider>
     
  )
}

export default App

const AdminProtect = ({role}) => {
  return(
     role?.role==="admin"?<Outlet />:<NotAuth />
  )
 }

 const UserAuth = ({token}) => {
  return (
    token?<Outlet />:<NotAuth />
  )
 }