import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiStairsCake } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";

function Category({setFilter}) {
  const bgcolor = {
    backgroundImage:'linear-gradient(35deg, #494949, #313131)'
  }

  const icon = 'w-[4.5rem] h-[4.5rem] rounded-full flex flex-col items-center justify-center text-slate-100 my-10'
  return (
    <div className="flex gap-10 items-center justify-center" >
      <div className={icon} style={bgcolor} onClick={() =>setFilter("italian")}>
      <FaPizzaSlice/>
      <h4 className="text-sm">Italian</h4>
      </div>
      <div className={icon} style={bgcolor} onClick={() =>setFilter("american")}>
      <GiHamburger />
      <h4 className="text-sm">American</h4>
      </div>
      <div className={icon} style={bgcolor} onClick={() =>setFilter("chinese")}>
      <h4><GiNoodles /></h4>
      <h4 className="text-sm">Chinese</h4>
      </div>
      
      
      
    </div>
  )
}

export default Category