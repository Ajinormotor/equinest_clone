import { CustomerCardProps } from "./CustomerCard.type"


const CustomerCard = ( prop: CustomerCardProps) => {
  return (
    <section className="bg-[#AEAEAE] rounded-[10px] max-w-[424px] w-full p-[1rem] flex flex-col gap-[10px] h-[150px]">


<div className="flex items-center justify-between">

<div className="flex items-center gap-[10px]">
<img src={prop.img} alt="customer-pics"  className="rounded-[50%] w-[50px] h-[50px]"  />
        <h1  className=" font-[600] text-[16px] leading-[19px] text-blackk">{prop.title}</h1>
      
    </div>

    <ul className="flex items-center justify-center">
        <li><i className="ri-star-fill text-goldk text-[21px]"></i></li>
        <li><i className="ri-star-fill text-goldk text-[21px]"></i></li>
        <li><i className="ri-star-fill text-goldk text-[21px]"></i></li>
        <li><i className="ri-star-fill text-goldk text-[21px]"></i></li>
        <li><i className="ri-star-fill text-goldk text-[21px]"></i></li>

    </ul>
</div>

<div className="">
    <p  className=" font-[400] text-[12px] leading-[14px] text-blackk opacity-[85%]">{prop.text}</p>
</div>


    </section>
  )
}

export default CustomerCard
