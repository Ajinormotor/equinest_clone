import { ChooseBetterCardProps } from "./ChooseBetterCard.type"

const ChooseBetterCard = (props:ChooseBetterCardProps) => {
  return (
<section className={`${props.title === "Secure transaction" || props.title === "Customer centric" ? "bg-goldk text-black": "bg-[#282828] text-white" }  
  h-[288px]  shadow-better flex flex-col items-center justify-center rounded-[17px] max-w-[323px]`}>

  
    <div className="flex flex-col items-center justify-center text-center  gap-[15px] p-[10px]">
        <div><img src={props.icon}  alt=""  className="w-[]" /></div>
        <h1  className=" font-[700] text-[20px] leading-[23px] font-rubik">{props.title}</h1>
        <p  className=" font-[400] text-[16px] leading-[18px] font-rubik">{props.description}</p>
    </div>

</section>
  )
}

export default ChooseBetterCard
