
import { Link } from "react-router-dom"
import logos from "/images/logo.svg"
import bravo from "../../../public/images/bravo.svg"

const Successfully = () => {
  return (
  <section className="flex flex-col max-h-screen">


        {/* image */}
<div className="flex items-start justify-start gap-[3px] px-2   w-full">
<img src={logos} alt="logo" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] text-[35px] leading-[48px] text-black font-rubik">Equinest</h1>
</div>

    <div className="flex flex-col items-center justify-center gap-[17px] max-w-[579px] w-full  p-[1rem] min-h-screen">
<img src={bravo} alt="logo" className="w-1/2 h-1/2 md:w-[300px] md:h-[200px]" />


<ul className="flex flex-col gap-[11px] text-center pt-[2rem]">
<li  className=" font-[700] md:text-[40px] md:leading-[47px] text-[30px] leading-[37px] text-[#575757] font-rubik">Bravo!!</li>

<li  className=" font-[400] text-[22px] leading-[26px] text-[#575757] font-rubik"> Congratulations You’ve successfully created an account.</li>
</ul>

<div className="w-full">
    
<button className="mt-[4rem] md:mt-[2rem] bg-goldk max-w-[417] w-full h-[43px] rounded-[4px] px-20[px] py-[12px] gap-[10px] flex items-center justify-center  shadow-butttonOne">
    <Link to="/"  className=" font-[600] text-[16px] leading-[19px] text-blackk font-rubik">Continue</Link>
</button>

</div>

    </div>

  </section>
  )
}

export default Successfully
