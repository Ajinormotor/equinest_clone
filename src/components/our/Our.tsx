import rafiki from "/images/rafiki.svg"
import amico from "/images/amico.svg"


import {motion}  from "framer-motion"
import useOurMotion from "./useOurMotion"
const Our = () => {


  const {itemVariant,containerVariant,vissionVariant,itemVissionVariant} = useOurMotion({delay:0.1})
  return (
 <section className="flex flex-col w-full gap-[4rem]  md:p-0">

    {/* our vission */}
    <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={vissionVariant} className="flex flex-col md:flex-row items-center justify-center p-[1.5rem] lg:gap-[80px]">

        <motion.div className="flex flex-col max-w-[508px] gap-[20px]" variants={itemVissionVariant}>
            <h1  className=" font-[600] text-[44px] leading-[55px] md:text-[64px] md:leading-[75px] font-rubik text-black">Our Vision:</h1>

            <p className=" font-[400] font-rubik text-[26px] leading-[31px] text-black"
>We envision a world where women has access to the knowledge and tools 
                they need to make sound financial decisions. </p>
                
                <p className=" font-[400] font-rubik text-[26px] leading-[31px] text-black pt-[2rem]">
                We believe financial literacy empowers women to build a brighter future </p>
                </motion.div>

       
<motion.div variants={itemVissionVariant}  className="max-w-[679px] w-full max-h-[505px]">
          <img src={rafiki}  alt="vision_pics"  className="w-full h-full" />
          </motion.div>

          </motion.div>

       {/* our target */}
       <motion.div 
       initial="hidden"
       whileInView="visible"
       variants={containerVariant} className="flex flex-col md:flex-row items-center justify-center bg-black p-[1.5rem] lg:gap-[80px]">

       <motion.div variants={itemVariant} className="max-w-[499px] max-h-[535px]">
  <img src={amico}  alt="vision_pics"  className="w-[] h-[]" />
</motion.div>

<motion.div variants={itemVariant} className="flex flex-col max-w-[508px] w-full gap-[20px] text-end">
    <h1  className=" font-[600] text-[44px] leading-[55px] md:text-[64px] md:leading-[75px] font-rubik text-goldk">Our Target</h1>

    <p className=" font-[400] font-rubik text-[26px] leading-[31px] text-white">Our target is to provide informative, engaging, and accessible financial 
resources to women of all backgrounds.</p>
        
        <p className=" font-[400] font-rubik text-[26px] leading-[31px] text-white pt-[2rem]">We strive to simplify complex financial concepts and empower women to save,
           and invest their money for a better tomorrow</p>
</motion.div>



</motion.div>


 </section>
  )
}

export default Our
