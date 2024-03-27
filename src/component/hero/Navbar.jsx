import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-scroll";
import { Link as Naviglink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
function Navbar() {
  
  return (
    <nav className=" fixed top-0 w-full bg-slate-50 p-2 z-10 opacity-80">
      <div className="w-[90vw] mx-auto flex ">
      <ul className="flex gap-2 flex-1 items-center">
        <Link to="hero"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={700}
      delay={700}>HOME</Link>
        <Link to="about"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-40}
      duration={700}
      delay={700}>ABOUT</Link>
        <Link to="signature"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-100}
      duration={700}
      delay={700}>SPECIAL</Link>
        <Link to="insta"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={-50}
      duration={700}
      delay={700}>INSTAGRAM</Link>
        
      </ul>
      <div className=" flex flex-col">
      <h1 className="font-Ephesis text-5xl">Bon jour</h1>
      <h6 className="text-center">cafe</h6>
      </div>
      <ul className="flex flex-1 justify-end gap-3 items-center">
        <li >
          {/* <div className="h-6 w-6 rounded-full bg-cyan-500 "></div>       */}
          <Naviglink to="/admin" className="">PRICE CHANGE</Naviglink>
        </li>
        <li><Naviglink to="/adminbilling"  className="">QUANTITIES</Naviglink></li>
        <li><Naviglink to="/takeaway" className="">TAKEAWAY</Naviglink></li>

        <li>
          <div className="relative flex ">
          <FaCartShopping size={24} />
      { (
        <span className="bg-red-500 text-white rounded-full px-2 py-1 ml-1 text-xs">
          15
        </span>)}
          </div>
        </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar