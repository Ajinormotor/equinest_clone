import logos from "/images/logo.svg"
import sign_in_pics from "/images/signin_pics.svg"
import { Link } from "react-router-dom"

const Signin = () => {
  return (
 <section className=" flex flex-col w-full py-[1rem] max-h-screen">

{/* image */}
<Link to="/" className="flex gap-[3px] px-2">
<img src={logos} alt="" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] text-[35px] leading-[48px] text-black font-rubik">Equinest</h1>
</Link>

<div className="flex items-center justify-center md:gap-[125px]  mt-[3rem] md:mt-[4rem]">

    <div className="flex flex-col gap-[50px] p-[10px] max-w-[581px] w-full ">

        <div className="flex flex-col gap-[7px]  w-full items-center justify-center">
            <h1  className=" font-[600] text-[28px] leading-[33px] text-blackk">Welcome Back</h1>
            <p  className=" font-[400] text-[16px] leading-[19px] text-[#4E4E4E]">Login to your EquiNest Account</p>
        </div>

        <div className="">

            <form className="flex flex-col gap-[15px]">


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




<ul className="flex flex-col w-full">
    <li className="flex items-center gap-[5px]">
    
    <h1    className=" font-[600] text-[13px] leading-[20px] text-goldk font-rubik md:text-end text-start">Forgot password?</h1></li>


</ul>

<div className="w-full">
    
<button className="bg-goldk max-w-[417] w-full h-[43px] rounded-[4px] px-20[px] py-[12px] gap-[10px] flex items-center justify-center  shadow-butttonOne">
    <h1  className=" font-[600] text-[16px] leading-[19px] text-white">Login</h1>
</button>
</div>

<div className="flex items-center justify-center">
    <Link to="/sign-up" className=" font-[400] text-[16px] leading-[19px] text-[#21213C] gap-[5px] flex"> Dont have an account?<span className="text-goldk">Sign up</span></Link>
</div>

                
            </form>
        </div>

    </div>

    <div className=" max-w-[563px] w-full hidden md:block">
    <img src={sign_in_pics} alt="" className="w-full object-cover  " />
    </div>
    
</div>



 </section>
  )
}

export default Signin
