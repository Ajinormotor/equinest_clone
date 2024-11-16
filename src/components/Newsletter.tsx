
const Newsletter = () => {
  return (
<section className="bg-blackk w-full max-h-[426px] h-full flex items-center justify-center py-[4rem]">


<div className=" bg-goldk max-w-[90%] h-[262px] w-full flex flex-col md:flex-row items-center justify-center md:justify-between rounded-[10px] px-[20px] py-[10px] gap-[15px]">

<div className="flex flex-col md:gap-[5px]">
  <h1 className="md:text-[32px] md:leading-[37px]  text-[26px]  leading-[30px]  font-[700] text-blackk">Subscribe to Our Newsletter</h1>
  <p className=" font-[400] md:text-[20px] md:leading-[23px]  text-blackk font-rubik">For New updates, resources and articles. Join Now</p>
</div>

  <div className="border-[1px] border-[#444343] rounded-[10px]  h-[69px] max-w-[592px] w-full flex items-center justify-center p-[10px]">
    <input type="text"  placeholder="Email"  className="bg-transparent outline-none border-0 w-full font-[400] text-[20px] leading-[23px] font-rubik text-black placeholder-black" />

    <button className="bg-blackk w-[152px] h-[52px]  rounded-[4px] px-[20px] py-[10px] gap-[10px] flex items-center justify-center shadow-newsletter">
    <h1  className=" font-[400] text-[24px] leading-[28px] text-white">Subscribe</h1>
</button>
</div>

</div>
  </section>
  )
}

export default Newsletter
