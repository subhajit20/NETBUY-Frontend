import { GrHomeRounded } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { IoReorderFour } from "react-icons/io5";
import { NavLink } from "react-router-dom";


type Props = {}

function FloatMenu({}: Props) {
  return (
    <div className="fixed w-full bottom-0 px-8 py-2 block sm:hidden">
        <div className="float_menu bg-brandColor py-2 px-10 rounded-full">
            <nav className="flex justify-between items-center w-full text-white">
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:text-brandColor text-white"}><GrHomeRounded className="w-5 h-5" /></NavLink>
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:text-brandColor text-white"}><IoCartOutline className="w-6 h-6" /></NavLink>
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:text-brandColor text-white"}><RiUserLine className="w-6 h-6" /></NavLink>
                <NavLink to="/" className={"btn bg-transparent hover:bg-white hover:text-brandColor text-white"}><IoReorderFour className="w-6 h-6" /></NavLink>
            </nav>
        </div>
    </div>
  )
}

export default FloatMenu