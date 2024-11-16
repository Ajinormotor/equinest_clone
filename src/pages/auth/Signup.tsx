import logos from "/images/logo.svg"
import sign_up_pics from "/images/amico_signup.svg"
import IC_Tick from "../../../public/coponents/IC_Tick"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
 <section className=" flex flex-col w-full py-[1rem] min-h-screen">

{/* image */}
<Link to="/" className="flex gap-[3px] px-2">
<img src={logos} alt="" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] text-[35px] leading-[48px] text-black font-rubik">Equinest</h1>
</Link>

<div className="flex items-center justify-center md:gap-[125px] mt-[1rem]">

    <div className="flex flex-col gap-[20px] p-[10px]">

        <div className="flex flex-col gap-[7px]">
            <h1  className=" font-[600] text-[28px] leading-[33px] text-blackk">Create an EquiNest Account</h1>
            <p  className=" font-[400] text-[16px] leading-[19px] text-[#4E4E4E]">Ensure you register so we can serve you better</p>
        </div>

        <div className="">

            <form className="flex flex-col gap-[15px]">

            <div className="flex flex-col gap-[5px]">
  <label htmlFor="fullName" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
    Full Name
  </label>
  <input
    type="text"
    id="fullName"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>

<div className="flex flex-col gap-[5px]">
  <label htmlFor="email" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
  Email Address
  </label>
  <input
    type="text"
    id="email"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>

<div className="flex flex-col gap-[5px]">
  <label htmlFor="phoneNumber" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
Phone Number
  </label>
  <input
    type="text"
    id="phoneNumber"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>

<div className="flex flex-col gap-[5px]">
  <label htmlFor="BVN" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
    BVN
  </label>
  <input
    type="text"
    id="BVN"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>

<div className="flex flex-col gap-[5px]">
  <label htmlFor="password" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
   Password
  </label>
  <input
    type="text"
    id="password"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>


<div className="flex flex-col gap-[5px]">
  <label htmlFor="confirmPassword" className="font-[400] text-[18px] leading-[23px] text-[#21213C]">
Confirm Password
  </label>
  <input
    type="text"
    id="confirmPassword"
    className="w-full h-[45px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>

<ul className="flex flex-col gap-[8px]">
    <li className="flex items-center gap-[5px]">
    <IC_Tick />
    <h1    className=" font-[600] text-[13px] leading-[20px] text-goldk font-rubik">At least one Lowercase</h1></li>

    <li className="flex items-center gap-[5px]">
    <IC_Tick />
    <h1    className=" font-[600] text-[13px] leading-[20px] text-goldk font-rubik">At least one Uppercase</h1></li>

    <li className="flex items-center gap-[5px]">
    <IC_Tick />
    <h1    className=" font-[600] text-[13px] leading-[20px] text-black font-rubik">At least one number</h1></li>

    <li className="flex items-center gap-[5px]">
    <IC_Tick />
    <h1   className=" font-[600] text-[13px] leading-[20px] text-black font-rubik">At least one special number</h1></li>
</ul>

<div className="w-full">
    
<button className="bg-goldk max-w-[417] w-full h-[43px] rounded-[4px] px-20[px] py-[12px] gap-[10px] flex items-center justify-center  shadow-butttonOne">
    <h1  className=" font-[600] text-[16px] leading-[19px] text-blackk">Proceed</h1>
</button>
</div>

<div className="flex items-center justify-center">
    <Link to="/sign-in" className=" font-[400] text-[16px] leading-[19px] text-[#21213C] gap-[5px] flex"> Already have an account?<span className="text-goldk">Log In</span></Link>

    
</div>

                
            </form>
        </div>

    </div>

    <div className=" max-w-[563px] w-full hidden md:block">
    <img src={sign_up_pics} alt="" className="w-full object-cover  " />
    </div>
</div>



 </section>
  )
}

export default Signup
