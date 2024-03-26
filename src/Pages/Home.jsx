import React from 'react'
import Hero from '../component/hero/Hero'
import Instagram from '../component/hero/Instagram'
import Carousel from '../component/hero/Carousel'
import About from '../component/hero/About'
import Insta from '../component/hero/Insta'
import ImgGrid from '../component/hero/ImgGrid'
import Navbar from '../component/hero/Navbar'
import Footer from '../component/hero/Footer'
import Credit from '../component/hero/Credit'


function Home() {
  return (
    <div>
        <Hero />
        <Navbar />
        <ImgGrid />
        <About />
        <Insta />
        <Carousel />
        <Instagram />
        <Footer/>
        <Credit />
    </div>
  )
}

export default Home