
import Header from "../ui/Header"

import phone_one from "/images/iPhone 12 Mockup Front View (1).svg"
import phone_two from "/images/iPhone 12 Mockup Front View (2).svg"
import phone_three from "/images/iPhone 12 Mockup Front View.svg"
import MobileHeader from "../ui/MobileHeader"
import { useState } from "react"

import {motion}  from "framer-motion"

const Hero = ({delay = 0}:{delay:number}) => {


  const [menu, setMenu]= useState(false)

  const toggleMenu = () => {
    setMenu((prev)  =>  !prev)
  }


  // anoimation property
  const containerVariant = {
    hidden: { x:50, opacity: 0},
    next: {
      x:-50, opacity:0.5
    },
    visible:{
      x:0, opacity:1,

      transition:{
        staggerChildren: 0.2,
        delayChildren: delay
      }
    }
  }

  const itemVarirant = {
    hidden:{x:50, opacity:0.5},
    visible:{x:0,opacity:1},
    next: {
      x:-50, opacity:0.5
    },
    
  }

  


  return (
<section className="bg-grayk  w-full   overflow-x-hidden  overflow-y-hidden">

{ !menu && <div className="bg-black inset-0 fixed opacity-[50%] z-[12] md:hidden"></div>}



<div className={` ${menu? ""  : ""}`}>


<Header menu={menu} toggleMenu={toggleMenu} />

<div className={` ${menu? "hidden"  : "fixed  z-[100]  "}`}>
<MobileHeader   />
</div>

</div>


    <div className="flex flex-col items-center justify-center h-screen  md:mt-[5rem]  gap-[70px]">

  

<motion.div className="text-center max-w-[895px] w-full flex flex-col items-center justify-center gap-[25px] pt-[5rem] md:pt-0" 
initial="hidden"
whileInView="visible"
exit="next" 
variants={containerVariant}

>
<motion.h1 variants={itemVarirant}   className=" font-[600] md:text-[54px] md:leading-[65px] text-[30px] leading-[37px] text-white font-rubik"> Endless Financial Opportunities with <span className="text-goldk">EquiNest </span> </motion.h1>
<motion.p variants={itemVarirant} className=" font-[400] text-[20px] leading-[23px] text-white font-rubik px-1">Building Your Financial Fortress...
Your digital access to Secure Your Future with Smart Savings and effortless financial management</motion.p>


<motion.button variants={itemVarirant} className="bg-goldk w-[220px] h-[62px] rounded-[4px] px-[12px] py-[20px] flex items-center justify-center">
    <h1  className=" font-[600] text-[32px] leading-37[px] text-grayk">Get Started</h1>
</motion.button>

</motion.div>



{/* image list */}
<div className="flex  items-center justify-center w-full  mb-[-9rem] lg:mb-[-6rem]">
 
  <div className="mr-[-1rem] lg:mr-[-3.8rem]">     <img src={phone_two} alt="curtain" className="md:w-[150px] lg:w-[200px] w-[120px] h-[131px] " />  </div>
  <div className=" z-[10] mb-[1.5rem]">     <img src={phone_one} alt="curtain" className="md:w-[150px] lg:w-[200px] w-[120px] h-[154px] " />  </div>
  <div className="ml-[-1rem] lg:ml-[-3.8rem]">     <img src={phone_three} alt="curtain" className="md:w-[150px] lg:w-[200px] w-[120px] h-[130px]" />  </div>
</div>

  
</div>

  

</section>
  )
}

export default Hero

