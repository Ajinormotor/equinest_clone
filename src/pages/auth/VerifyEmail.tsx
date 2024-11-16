
import logos from "/images/logo.svg"


const VerifyEmail = () => {
  return (
   <section className="flex flex-col py-[2rem]">


    {/* image */}
<div className="flex items-start justify-start gap-[3px] px-2   w-full">
<img src={logos} alt="logo" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] text-[35px] leading-[48px] text-black font-rubik">Equinest</h1>
</div>


<div className="flex flex-col items-center justify-center max-w-[561px] w-full gap-[53px] mt-[4rem] p-[10px]">

    <div className="flex flex-col  gap-[31px] max-w-[384px] w-full">
        <h1 className=" font-[700] md:text-[38px] text-[30px] leading-[35px] md:leading-[45px] text-blackk font-rubik">Verify email address</h1>
        <p   className=" font-[400] text-[18px] leading-[21px] text-[#575757] font-rubik">We’ll send a code to your email address to
        confirm you own it</p>

        <h2  className=" font-[700] text-[22px] leading-[26px] text-goldk text-center font-rubik">davidjones@example.com</h2>
    </div>

    <form className="flex flex-col  max-w-[456px] w-full gap-[21px]">
        
<div className="flex flex-col gap-[8px]">
  <label htmlFor="email" className="font-[400] text-[18px] leading-[23px] text-[#21213C] font-rubik">
Verfication Code
  </label>
  <input
    type="text"
    id="email"
    className="w-full h-[48px] outline-none rounded-[5px] border-[1px] border-[#21213C] p-[5px]"
    placeholder=""
  />
</div>


<div className="flex items-center justify-center w-full">
<h1 className=" font-[700] text-[24px] leading-28[px] text-blackk font-rubik">Resend Code</h1>
    </div>


<div className="w-full">
    
<button className="bg-goldk max-w-[417] w-full h-[43px] rounded-[4px] px-20[px] py-[12px] gap-[10px] flex items-center justify-center  shadow-butttonOne">
    <h1  className=" font-[600] text-[16px] leading-[19px] text-blackk font-rubik">Verify</h1>
</button>
</div>

<div className="flex items-center justify-center">
    <h1 className=" font-[400] text-[16px] leading-[19px] text-[#21213C] gap-[5px] flex"> Already have an account?<span className="text-goldk">Log In</span></h1>
</div>

    </form>

</div>




   </section>
  )
}

export default VerifyEmail
