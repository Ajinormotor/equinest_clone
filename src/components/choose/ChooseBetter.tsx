import ChooseBetterCard from "../../cards/choose-better-card/ChooseBetterCard"
import choosebetterdata from "../../data/choosebetterdata"
import useChooseMotion from "./useChooseMotion"
import {motion} from 'framer-motion'


const ChooseBetter = () => {


const {containerVariant,itemVariant} = useChooseMotion({delay: 0.1})


  return (
 <section className="flex flex-col items-center  md:items-start  py-[5rem] p-[10px] gap-[20px] overflow-x-hidden">


{/* heading */}
<motion.div
initial="hidden" whileInView="visible"  exit="next" variants={containerVariant}className="" >
    <h1 className=" font-[600] md:text-[53px] md:leading-[63px] text-[33px] leading-[43px] text-black">Choose Better <br />  With <span className="text-goldk">Equinest </span></h1>
</motion.div>



<motion.div
initial="hidden" whileInView="visible"  exit="next" variants={containerVariant}
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] justify-items-center w-full">

    {

        choosebetterdata.map((c)=> (
<motion.div  
 variants={itemVariant}
key={c.id}>
<ChooseBetterCard  
title={c.title}
description={c.description} 
icon={c.icon} />
</motion.div>

        ))

    }

</motion.div>

 </section>
  )
}

export default ChooseBetter
