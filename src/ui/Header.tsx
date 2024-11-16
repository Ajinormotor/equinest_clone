import { Link} from "react-router-dom"
import logos from "/images/logo.svg"
import { useEffect, useRef } from "react"





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


const Header = ({menu,toggleMenu}: { menu: boolean, toggleMenu: () => void}) => {

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleHeader = () => {
      if (headerRef.current) { // Null check here
        if (document.documentElement.scrollTop > 80 || document.body.scrollTop > 80) {
          headerRef.current.classList.add("sticky_header");
        } else {
          headerRef.current.classList.remove("sticky_header");
        }
      }
    };

    window.addEventListener("scroll", handleHeader);

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);


  return (
<section ref={headerRef} className={`flex justify-between items-center px-[1rem] p-[15px] z-[100]  `}>



<div className="flex gap-[3px]  z-[100]">
<img src={logos} alt="" className="w-[52px] h-[52px]" />
<h1    className=" font-[600] md:text-[43px] leading-[48px] text-white font-rubik">Equinest</h1>
</div>

{/* nav_links */}

<div className="">
  <ul  className="hidden md:flex gap-[10px]">
    {
      nav_links.map((nav) => (
        <li key={nav.id} className="cursor-pointer">
          <Link to={nav.path}  className={` font-[600] text-[23px] leading-[27px] text-white font-rubik 
          after:text-goldk hover:text-goldk  ${nav.path === 'path'? "text-goldk" : "text-white"}
          `}>
          {nav.display}</Link> </li>
      ))
    }
  </ul>

</div>

<div className="hidden md:flex gap-[15px]">

<button className="bg-goldk w-[163px] h-[51px] rounded-[4px] px-[20px] py-[12px] flex items-center justify-center">
    <Link to="/sign-up" className=" font-[600] text-[23px] leading-[27px] text-black font-rubik">Sign Up</Link>
</button>

<button className="bg-transparent w-[163px] h-[51px] border-white border-[3px] rounded-[4px] px-[20px] py-[12px] flex items-center justify-center shadow-header">
    <Link to="/sign-in"  className=" font-[600] text-[23px] leading-[27px] text-white font-rubik">Log In</Link>
</button>

</div>

<div className="block md:hidden  z-[100] " onClick={toggleMenu}>

  {menu ? 
<i className="ri-menu-2-line text-white text-[25px] cursor-pointer"></i>

:
<i className="ri-close-line text-white text-[25px] cursor-pointer"></i>

  }
</div>

</section>
  )
}

export default Header
