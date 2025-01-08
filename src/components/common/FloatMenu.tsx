import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiUserLine } from "react-icons/ri";
import { IoReorderFour } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

type Props = {}

function FloatMenu({}: Props) {
    const { pathname } = useLocation();
  return (
    <div className="fixed w-full bottom-0 px-8 pb-10 block sm:hidden">
        <div className="float_menu bg-brandColor py-2 px-2 sm:px-5 md:px-10 rounded-full">
            <nav id="float_nav" className="flex justify-between items-center w-full text-white">
                <NavLink to="/" className={`btn justify-center items-center hover:bg-white ${pathname === "/" ? "bg-white text-brandColor rounded-full flex flex-col" : "bg-transparent text-white"} hover:rounded-full hover:text-brandColor `}>
                    <GrHomeRounded className={`${pathname === "/" ? "w-4 h-4" : "w-5 h-5"}`} />
                    {
                        pathname === "/" && <span className="text-xs">HOME</span>
                    }
                </NavLink>
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:rounded-full hover:text-brandColor text-white"}><HiOutlineShoppingCart className="w-6 h-6" /></NavLink>
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:rounded-full hover:text-brandColor text-white"}><RiUserLine className="w-6 h-6" /></NavLink>
                <label htmlFor="drawer-right" className={"btn bg-transparent hover:bg-white hover:rounded-full hover:text-brandColor text-white"}><IoReorderFour className="w-6 h-6" /></label>
            </nav>
        </div>
        <Sidebar />
    </div>
  )
}

export default FloatMenu