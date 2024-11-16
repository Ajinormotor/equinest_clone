
import { Link } from "react-router-dom"




const nav_links = [
  {
    id: "1",
    path:"",
    display: "Home"
  },

  {
    id: "2",
    path:"#",
    display: "About us"
  },

  {
    id: "3",
    path:"#",
    display: "Services"
  },

  {
    id: "4",
    path:"#",
    display: "Contact us"
  },
]



const MobileHeader = () => {




  return (
<section  className="md:hidden flex flex-col h-1/2 border-b-[2px] border-blackk gap-[25px]  justify-start items-center px-[1rem] p-[15px] z-[10] bg-white rounded-b-[10px]">


{/* nav_links */}

<div className="">
  <ul  className="flex flex-col gap-[10px] text-center">
    {
      nav_links.map((nav) => (
        <li key={nav.id} className="cursor-pointer">
          <Link to={nav.path}  className={` font-[600] text-[23px] leading-[27px] text-black font-rubik 
          after:text-goldk hover:text-goldk  ${nav.path === 'path'? "text-goldk" : "text-black"}
          `}>
          {nav.display}</Link> </li>
      ))
    }
  </ul>

</div>

<div className="flex gap-[15px]">

<button className="bg-goldk w-[163px] h-[51px] rounded-[4px] px-[20px] py-[12px] flex items-center justify-center">
<Link to="/sign-up" className=" font-[600] text-[23px] leading-[27px] text-black font-rubik">Sign Up</Link>
</button>

<button className="shadow-header bg-black w-[163px] h-[51px] border-white border-[3px] rounded-[4px] px-[20px] py-[12px] flex items-center justify-center">
<Link to="/sign-in"  className=" font-[600] text-[23px] leading-[27px] text-white font-rubik">Log In</Link>
</button>

</div>

</section>
  )
}

export default MobileHeader
