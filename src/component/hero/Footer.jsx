import cupCake from '../../assets/cupCake.png'
import chains_logo from '../../assets/chains_logo.png'
import chains_logo_2 from '../../assets/chains_logo_2.png'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-40 bg-slate-950 flex justify-around py-10 border-b-2 border-gray-50">
      <div>
        <h1 className='text-gray-200 text-center'>A group restaurant</h1>
      <div>
        <div className='flex gap-1'>
      <img src={cupCake} alt="" className='h-28 w-24 pt-8'/>
      <div className=' text-slate-200 pt-8'>
        <h1>THE</h1>
        <h1>HUNGRY</h1>
        <h1>FAMILY</h1>
      </div>
      </div>
      </div>
      <div className="text-stone-50 flex mt-8">
        <a href="https://www.instagram.com/" className='px-2'><FaInstagram /></a>
        <a href="https://www.facebook.com/" className='px-2'><FaFacebookSquare /></a>
        <a href="https://www.youtube.com/" className='px-2'><FaYoutube /></a>
      </div>
      </div>
      <div>
        <h1 className='text-gray-200 text-center md:block hidden'>Discover our other restaurants</h1>
      <div className='mt-8 md:flex hidden'>
        <img src={chains_logo} alt="" className='h-28 px-10'/>
        <img src={chains_logo_2} alt="" className='h-32 px-10'/>
        </div>
        </div>
    </div>
  )
}

export default Footer