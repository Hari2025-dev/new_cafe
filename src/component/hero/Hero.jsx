import table2 from '../../assets/table2.jpg'
import table from '../../assets/table.jpg'

/* 
absolute bottom-0 left-0 w-full leading-0 overflow-hidden
relative block w-[calc(103% + 1.3px)] h-[200px]
fill-[#F29BBC]

  .custom-shape-divider-bottom-1701244508 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1701244508 svg {
    position: relative;
    display: block;
    width: calc(103% + 1.3px);
    height: 186px;
}

.custom-shape-divider-bottom-1701244508 .shape-fill {
    fill: #F29BBC;
}
*/
function hero() {
  return (
    <div className="relative" id='hero'>
      <div className="w-full h-[100vh]">
     <img className="top-0 left-0 w-full h-full object-cover" src={table}></img>
      <div className="bg-black/30 absolute top-0 left-0 w-full h-full"/>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-white">
      <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
        <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl"></h1>
        
      </div>
      </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-0 overflow-hidden">
    <svg className='relative block w-[calc(103% + 1.3px)] h-[200px]' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#F29BBC]"></path>
    </svg>
    
</div>
</div>
     
  )
}

export default hero