import ProductCard from "../../cards/product-card/ProductCard"
import { productdata } from "../../data/productdata"
import useChooseMotion from "../choose/useChooseMotion"

import {motion} from 'framer-motion'

const Product = () => {

  const {containerVariant,itemVariant} = useChooseMotion({delay: 0.1})


  return (
<section className="overflow-x-hidden flex flex-col items-center justify-center bg-grayk p-[15px]  py-[5rem] gap-[25px]">

    <div className="flex flex-col items-center justify-center gap-[5px] pt-[3rem]">
<h1   className="font-rubik text-[30px] leading-[40px] font-[600] md:text-[50px] md:leading-[59px] text-white">Our Products</h1>
<p    className=" font-[400] text-[20px] leading-[23px] font-rubik text-white" > We offer some varieties of products</p>
    </div>

    <motion.div  

    initial="hidden" whileInView="visible"  exit="next" variants={containerVariant}
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center pt-[4rem] gap-[45px] md:gap-[15px] p-[10px]">

        { productdata.map((p)=> ( 

<motion.div  
variants={itemVariant}
>
        <ProductCard 

      id={p.id}
          title={p.title}
          text={p.text}
          icon={p.icon}
        />

        </motion.div>

    ))}
   </motion.div>

</section>
  )
}

export default Product
