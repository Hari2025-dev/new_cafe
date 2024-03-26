import React, { useEffect, useState } from 'react'
import { useBilling } from '../Billings/useBillings'
import { useQuery } from '@tanstack/react-query'
import { getBilling } from '../../services/apiBillings'
const initial ={
  'BBQ Chicken Pizza':0,
  'Margherita Pizza':0,
  'Chow Mein Noodles':0,
  'French Fries' :0,
  'Pasta':0,
  'Hawaiian Pizza':0,
  'Bacon cheeseburger':0,
  ' Pepperoni Pizza':0,
  'Buffalo burger':0
}

function AdminBilling() {
  
  const[billingData,setbillingData] = useState([])
  const[filterDate,setFilterDate] = useState("")
  const[count,setCount] = useState(initial)
  // const{billingData, isLoading, status} = useBilling()
  
  const{isLoading, data:billings, error, status} = useQuery({
    queryKey:["billings"],
    queryFn: getBilling
  })
 
  useEffect(() => {
    if(status==="success"){
      console.log('success')
      // setbillingData(billings)
      setbillingData(billings)
      billings.forEach((item) => {
        console.log(count[item.Name])
        // setCount((prev) =>({...prev,[item.Name]:[item.Name]+item.quantity}))
        count[item.Name]+=item.quantity
        setCount({...count})
        
      })
    }
  },[status])
 
  if(error) alert(error)

  useEffect(() => {
    let updatedBilling = {
      'BBQ Chicken Pizza':0,
  'Margherita Pizza':0,
  'Chow Mein Noodles':0,
  'French Fries' :0,
  'Pasta':0,
  'Hawaiian Pizza':0,
  'Bacon cheeseburger':0,
  ' Pepperoni Pizza':0,
  'Buffalo burger':0
    }
    billingData.map((item) => {
      if(item.created_at === filterDate){
        updatedBilling[item.Name]+=item.quantity
      }
    })
    setCount(updatedBilling)

  },[filterDate])

  function filterByDate(e){
   
    setFilterDate(() => e.target.value)
    console.log(filterDate)
  }

  return (
    <div className='bg-pink-300 flex flex-col justify-center items-center p-10'>
      <h1 className='text-xl mb-10'>Quantities Of Food Items</h1>
      <div className='w-1/2 mx-auto bg-blue-200 p-8 rounded-lg'>
        <div className='text-center p-2'>
        <label htmlFor="search">Search by Date</label>
        <input type="date" name="search" className='rounded-lg p-1 ml-5' value={filterDate} onChange={filterByDate}/>
        </div>
      {Object.entries(count).map((item,index) =>{
        return(<div key={index} className='px-20 py-2 flex justify-center items-center '>
          <h1 className='flex-1'>{item[0]}</h1>
          <h1 className='flex-1 text-center'>{item[1]}</h1>
        </div>)
      })}
      </div>
    </div>
  )
}

export default AdminBilling