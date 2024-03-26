import Chef from '../../assets/chef.png'
import cafe1 from '../../assets/cafe1.jpg'
import cafe2 from '../../assets/cafe2.jpg'
import cafe3 from '../../assets/cafe3.jpg'
import cafe4 from '../../assets/cafe4.jpg'

const backgroundColour = {backgroundColor:" #D9AFD9",
backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"
}
function About() {
  return (
    <div className='flex p-10' id='about' >
      <div className=' flex-1 p-10'>
        <h1 className='font-Playball text-7xl pb-10'>About US</h1>
        <p className='font-Merriweather text-sm'>Founded by Mia and Alex, two friends ignited by a shared passion for brewing excellence, Aroma Haven emerged as a beacon of warmth and camaraderie. What began as a dream soon blossomed into a beloved café, drawing in locals and wanderers alike.

              The secret to its fame wasn't just in the rich aroma of their coffee blends or the tempting pastries but in the genuine connections fostered within its cozy walls. Every visitor, from the bustling morning crowd to the evening bookworms, brought their tales, making Aroma Haven more than just a place to sip coffee—it was a gathering of souls.

              Seasons changed, but the essence remained. Whether it was the lively buzz of summer or the cozy embrace of winter, Aroma Haven adapted, mirroring the city's spirit and becoming an integral part of its heartbeat.

              Yet, what truly made Aroma Haven shine were its regulars. They weren't just customers; they were family. From the aspiring artists seeking inspiration to friends catching up after long intervals, every moment at Aroma Haven was etched into the fabric of the café's legacy.</p>
      </div>
      <div className='flex-1 p-10 mt-10 hidden lg:inline-block'>
        <div className='pt-5 grid grid-cols-3'>
        <img className='h-[300px] w-[150px] object-cover bg-center imageup' src={cafe1} alt="cafe" />
        <img className='h-[300px] w-[150px] object-cover bg-center imagedown' src={cafe2} alt="cafe" />
        <img className='h-[300px] w-[150px] object-cover bg-center imageup' src={cafe3} alt="cafe" />
        </div>
      </div>
    </div>
  )
}

export default About