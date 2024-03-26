import React, { useState } from 'react'
import supabase from '../../services/supabase'
import { Link, useNavigate } from 'react-router-dom'

function Login({setToken}) {
  const[signIn,setSignIn] = useState({
    Name:'',
    password:''
  })
  const[userID,setUserID] = useState()
  const navigate = useNavigate()

  console.log(signIn)
  function handleChange(e){
    setSignIn((prev) => {
      return{...prev,[e.target.name]:e.target.value}
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    try{
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signIn.Name,
        password: signIn.password,
      })
      if(error) throw error
      console.log(data)
      setToken(data)
      navigate('/home')
          
      
    }
    catch(error){
      alert(error)
    }

    
  }
  return (
    <div className='h-screen bg-violet-500 flex items-center justify-center '>
    <div className='flex flex-col bg-white w-[40%] items-center justify-center py-10 rounded-lg'>
      <div>
      <h1 className='my-3 text-center text-xl'>Login</h1>
      <div className='flex flex-col'>
      <label htmlFor="">Email</label>
      <input className='my-3 h-8 w-[25rem] border-2' type="email" placeholder='Email' name='Name' onChange={handleChange}/>
      </div>
      <div className='flex flex-col'>
      <label htmlFor="">Password</label>
      <input className='my-3 h-8 w-[25rem] border-2' type="text" placeholder='Password' name='password' onChange={handleChange}/>
      </div>
      <button className='my-3  h-8 w-[25rem] bg-violet-700 text-white' onClick={handleSubmit}>Submit</button>
      <h3 className='my-3'>Don't have an Account</h3>
      <Link className='my-3' to='/signup'>Signup</Link>
      </div>
    </div>
    </div>
  )
}

export default Login