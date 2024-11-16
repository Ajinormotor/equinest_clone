import { ProductCardProps } from "./ProductCard.type"


const ProductCard = (props: ProductCardProps) => {
  return (
    <section  key={props.id} className="">

    <div  className="flex flex-col items-center justify-center text-center  gap-[10px] text-white">
       <div className="flex items-center justify-center rounded-[50%] bg-[#FFC700B2] w-[70px] h-[70px]" ><img src={props.icon}  alt=""  className="w-[]" /> </div>
        <h1  className=" font-[700] text-[20px] leading-[23px] font-rubik">{props.title}</h1>
        <p  className=" font-[400] text-[16px] leading-[18px] font-rubik text-center w-[80%]">{props.text}</p>

        </div>
    </section>
  )
}

export default ProductCard
