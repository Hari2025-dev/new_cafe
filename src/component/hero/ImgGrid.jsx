import React from 'react'
import Cafecakes from '../../assets/Cafecakes.jpg'
import Cafecakes2 from '../../assets/Cafecakes2.jpg'
import Cafecakes3 from '../../assets/Cafecakes3.jpg'
import bowl from '../../assets/bowl.jpg'
import coffee3 from '../../assets/coffee3.jpg'
import bowl4 from '../../assets/bowl4.jpg'

function ImgGrid() {
  return (
    <div className='bg-[#F29BBC]'>
      <h1 className='font-Raleway text-5xl text-gray-50 text-center pb-28'>Brunch Continental</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <img className="h-[350px]" src={Cafecakes} alt="Cafecakes" />
        <img className="h-[350px]" src={Cafecakes2} alt="Cafecakes2" />
        <img className="h-[350px]" src={Cafecakes3} alt="Cafecakes3" />
        <img className="h-[350px]" src={bowl} alt="bowl" />
        <img className="h-[350px]" src={coffee3} alt="bowl2" />
        <img className="h-[350px]" src={bowl4} alt="coffee" />
      </div>
    </div>
  )
}

export default ImgGrid