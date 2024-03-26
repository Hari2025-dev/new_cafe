import {motion} from 'framer-motion'
import  Cake  from '../../assets/instaPics/cake.jpg'
import Cake2 from '../../assets/instaPics/cake2.jpg'
import Crossaint from '../../assets/instaPics/crossaint.jpg'
import Pasta from '../../assets/instaPics/pasta.jpg'
import Burger from '../../assets/instaPics/burger.jpg'
import Pizza from '../../assets/instaPics/pizza.jpg'
import Card from './Card'
import { useState } from 'react'

function Instagram() {

  const [num, setNum] = useState(2)
  const Images = [Cake, Burger, Cake2, Pasta]
  
  function handleClick(i){
    setNum(i)
  }
  
  return (
    <motion.div>
      <div className="h-[85vh] w-[80vw] mx-auto my-10" id='insta'>
        <h1 className='text-5xl py-10'>#EXPLORE_OUR_CAFE_ON_INSTA</h1>
        <div className='flex gap-5'>
        {Images.map((image, index) => {
          return(
          <img key={index} src={image} alt="Image" className={'w-[150px] h-[350px] object-cover bg-center transition-all duration-700 ease-in-out delay-100' } 
          style={{flex: index === num ? '3' : '1'}} onClick={() => handleClick(index)}/>)
    })}
    </div>
      </div>
    </motion.div>
  )
}

export default Instagram