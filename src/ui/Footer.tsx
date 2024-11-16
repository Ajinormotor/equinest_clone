import footerlogo from "../../public/images/footer_logo.svg"

const Footer = () => {
  return (
<section className=" flex flex-col gap-[15px] ">

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center gap-[15px] p-[25px]">

    <div className="flex items-center justify-center mb-[1rem] md:my-0">
      <img src={footerlogo} alt="" className="" />
    </div>

<div className="flex flex-col gap-[18px]">
  <h1  className=" font-[600] md:text-[32px] md:leading-[37px] text-[25px] leading-[30px] text-[#282828] font-rubik">Services</h1>

  <ul className="flex flex-col gap-[10px]">
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Saving Money</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Investments</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Financial communities</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Getting loan</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Financial advice</li>
  </ul>
</div>


{/* box 2 */}
<div className="flex flex-col gap-[18px]">
  <h1  className=" font-[600] md:text-[32px] md:leading-[37px] text-[25px] leading-[30px] text-[#282828] font-rubik">About Us</h1>


  <ul className="flex flex-col gap-[10px]">
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Financial expertise</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">contact address</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Partners</li>
  </ul>
</div>


{/* box 3 */}
<div className="flex flex-col gap-[18px]">
  <h1  className=" font-[600] md:text-[32px] md:leading-[37px] text-[25px] leading-[30px] text-[#282828] font-rubik">Contact</h1>

  <ul className="flex flex-col gap-[10px]">
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">+23487690345678</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">Info@medvult,com</li>
    <li className=" font-[400] md:text-[23px] md:leading-[27px] text-[20px] leading-[25px] text-[#282828] font-rubik">54 jones close porthacourt</li>
  </ul>
</div>

  </div>

  <div  className="flex items-center justify-center border-t-[1px] border-black h-[56px]">
    <h1       className=" font-[500] text-[16px] leading-15[px] text-[#282828]">© 2023 EquiNest. All Right Reserved.</h1>
  </div>
</section>

  )
}

export default Footer
