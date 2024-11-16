import CustomerCard from "../cards/customer-card/CustomerCard"
import { customerdata } from "../data/customerdata"
import Slider from "react-slick"


const Customer = () => {

    const settings = {
        dots: true,
        loop:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay:true,
        autoPlaySpeed:3000,
        swipeToSlide:true
   
      };

  return (
  <section className="overflow-x-hidden w-full  flex flex-col p-[10px]  gap-[25px] py-[2rem]">

  {/* heading */}
<div className="">
    <h1 className=" font-[600] md:text-[53px] md:leading-[63px] text-[33px] leading-[43px] text-black">Happy customers</h1>
</div>

<div className="grid grid-cols-1 md:hidden items-center justify-center gap-[15px]  w-full">
    <Slider className="lg:w-[1200px] flex gap-[15px] " {...settings} >



    {
        customerdata.map((c)=> (

            <CustomerCard 
            
            img={c.img}
            title={c.title}
            text={c.text}
            />
      
        ))
    }

</Slider>
</div>

{/* mediu screen without slider */}

<div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-[15px]  w-full">

    {
        customerdata.map((c)=> (

            <CustomerCard 
            
            img={c.img}
            title={c.title}
            text={c.text}
            />
      
        ))
    }


</div>


  </section>
  )
}

export default Customer
