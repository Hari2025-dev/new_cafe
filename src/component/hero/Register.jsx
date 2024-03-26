import React, { useState } from 'react'
import supabase from '../../services/supabase'
import { Link } from 'react-router-dom'
function Register() {
  const[details,setDetails] = useState({
    Name:'',
    Email:'',
    Password:''
  })

  console.log(details)

  function handleClick(e){
    setDetails((prev) => {
      return{...prev,[e.target.name]:e.target.value}
    })
  }

async function handleSubmit(e){
  e.preventDefault()
  console.log("success")
try{
const { data, error } = await supabase.auth.signUp(
  {
    email: details.Email,
    password: details.Password,
    options: {
      data: {
        Name: details.Name,
      }
    }
  }
)
if (error) throw error
console.log('success')
alert('check the email for verification')
}
catch(error){
  console.log(error)
}

  }
  return (
    <div className='bg-violet-500'>
      <div className="w-1/2 lg:w-1/2 py-16 px-12 mx-auto bg-white">
          <h2  className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It’s free and only take a minute
          </p>
          <form>
          <div className="mt-5">
              <input type="text" placeholder="First Name" name="firstName" className="border border-gray-400 py-1 px-2 w-full " onChange={handleClick}/>
            </div>
            <div className="mt-5">
              <input type="text" placeholder="Last Name" name="lastName" className="border border-gray-400 py-1 px-2 w-full " onChange={handleClick}/>
            </div>
            <div className="mt-5">
              <input type="text" placeholder="Email" name="Email" className="border border-gray-400 py-1 px-2 w-full" onChange={handleClick}/>
            </div>
            <div className="mt-5">
              <input type="password" placeholder="Password" name="Password" className="border border-gray-400 py-1 px-2 w-full " onChange={handleClick}/>
            </div>
            
            <div className="mt-5">
              <input type="checkbox" className="border border-gray-400" />
              <span>
                I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
              </span>
            </div>
            <div className="mt-5">
              <button className="w-full bg-purple-500 py-3 text-center text-white" onClick={handleSubmit}>Register Now</button>
            </div>
          </form>
          <h1>Already Have an account, </h1><Link to='/login' className='text-violet-500'>Login</Link>
        </div>
        </div>
  )
}

export default Register