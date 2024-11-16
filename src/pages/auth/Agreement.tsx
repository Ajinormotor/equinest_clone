import logos from "/images/logo.svg"
import agreement_icon from "../../../public/images/agreement_icon.svg"
import { Link } from "react-router-dom"

const Agreement = () => {
  return (
    <section className="flex flex-col py-[2rem] min-h-screen">


    {/* image */}
<div className="flex gap-[3px] px-2 ">
<img src={logos} alt="" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] text-[35px] leading-[48px] text-black font-rubik">Equinest</h1>
</div>


<div className="flex flex-col items-center justify-center max-w-[703px] w-full gap-[53px] mt-[4rem] p-[10px]">

    <div className="flex flex-col items-center justify-center max-w-[597px]  gap-[13px] w-full">


<div className="flex flex-col max-w-[413px] w-full items-center justify-center gap-[13px]">
<img src={agreement_icon} alt="" className="w-[100px] h-[100px]" />
        <h1 className="text-center font-[700] md:text-[38px] text-[30px] leading-[35px] md:leading-[45px] text-blackk font-rubik">Before you Open your 
        EquiNest Account</h1>
</div>


        <ul className="flex flex-col gap-[23px] text-center pt-[2rem]">
        <li  className=" font-[400] text-[18px] leading-[21px] text-[#21213C] font-rubik">By Opening this EquiNest account you agree that the following are true</li>

        <li  className=" font-[400] text-[18px] leading-[21px] text-[#21213C] font-rubik"> All the information i gave to open this account are mine and accurate</li>

        <li  className=" font-[400] text-[18px] leading-[21px] text-[#21213C] font-rubik">I promise not to use this account for any fraudulent, criminal or illegal activity.</li>

        <li  className=" font-[400] text-[18px] leading-[21px] text-[#21213C] font-rubik">If EquiNest finds out or suspects i am using this account for any fraudulent, criminal or illegal activity,the bank can restrict or close my account</li>

        <li  className=" font-[400] text-[18px] leading-[21px] text-[#21213C] font-rubik">Equinest will report any transaction on this
account that appears suspicious or exceeds regulatory limits to law enforcement agencies and
regulatory authorities</li>
        </ul>
      

     
    </div>

    <form className="flex flex-col  w-full gap-[21px]">
        
<div className="flex items-center justify-start h-[54px] p-[10px] gap-[10px] rounded-[5px] border-[1px] border-blackk">

  <input
    type="checkbox"
    id="email"
    className="w-[19px] h-[19px] outline-none rounded-[50%] border-[3px] border-[#21213C] p-[5px]"
    placeholder=""
  />

<label htmlFor="email" className="font-[400] text-[14px] leading-[16px] text-[#21213C] font-rubik">
I agree and wish to continue
  </label>
</div>



<div className="w-full">
    
<button className="bg-goldk max-w-[417] w-full h-[43px] rounded-[4px] px-20[px] py-[12px] gap-[10px] flex items-center justify-center  shadow-butttonOne">
    <Link to="/successfully"  className=" font-[600] text-[16px] leading-[19px] text-blackk font-rubik">Register</Link>
</button>
</div>

    </form>

</div>




   </section>
  )
}

export default Agreement
