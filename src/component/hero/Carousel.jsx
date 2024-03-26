import Biriyani from "../../assets/biriyani.png"
import Burger from "../../assets/burger.png"
import Fries from "../../assets/frenchFries.png"
import Noodles from "../../assets/noodles.png"
import Pizza from "../../assets/pizza.png"
import Smoothie from "../../assets/smoothie.jpg"
import Smoothie2 from "../../assets/smoothie2.jpg"
import Redcake from "../../assets/redcake.jpg"
import Chriscake from "../../assets/chriscake.jpg"
import Bowl2 from "../../assets/chriscake.jpg"


 
const bgColor ={
// backgroundColor:"rgba(232,5,5,1)",
// backgroundImage: "linear-gradient( 111.2deg,  rgba(232,5,5,1) 1.7%, rgba(245,49,191,1) 98.7% );"
border:"1px solid red"
}
 function Carousel() {
   return (
     <div className="relative" style={bgColor}>
      {/* <h1 className="font-Playball text-5xl pb-10 text-center text-gray-50">The Menu's We offer</h1> */}
      <div className=" relative w-[1140] overflow-hidden">
      <div className="animate-scroll-slow w-[calc(250px * 10)] flex">
      <img src={Biriyani} alt="" className="h-[250px] w-[300px]"/>
        <img src={Burger} alt="" className="h-[250px] w-[300px]"/>
        <img src={Fries} alt="" className="h-[250px] w-[300px]"/>
        <img src={Noodles} alt="" className="h-[250px] w-[300px]"/>
        <img src={Pizza} alt="" className="h-[250px] w-[300px]"/>
      
        <img src={Biriyani} alt="" className="h-[250px] w-[250px]"/>
        <img src={Burger} alt="" className="h-[250px] w-[250px]"/>
        <img src={Fries} alt="" className="h-[250px] w-[250px]"/>
        <img src={Noodles} alt="" className="h-[250px] w-[250px]"/>
        <img src={Pizza} alt="" className="h-[250px] w-[250px]"/>
      </div>
    </div>   
  </div>
   )
 }
 
 export default Carousel