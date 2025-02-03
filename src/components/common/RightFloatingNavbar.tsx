import { MdOutlineSmartphone } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { TiPin } from "react-icons/ti";
import { FaDiscord } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";


type Props = {}

function RightFloatingNavbar({}: Props) {
  return (
    <div  className="fixed w-10 h-80 top-60 right-5 md:right-16">
        <div id="right_floating_nav" className="flex flex-col justify-center items-center bg-gray-300 gap-y-2 rounded-full py-2">
            <div className="">
                <NavLink to="/" className="btn bg-transparent hover:rounded-full group text-white">
                    <MdOutlineSmartphone className="w-6 h-6 text-gray-400 group-hover:text-brandColor transition-all duration-200 ease-linear" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className="btn bg-transparent hover:rounded-full group text-white">
                    <FaUser className="w-6 h-6 text-gray-400 group-hover:text-brandColor transition-all duration-200 ease-linear"  />
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className="btn bg-transparent hover:rounded-full group text-white">
                    <TiPin className="w-6 h-6 text-gray-400 group-hover:text-brandColor transition-all duration-200 ease-linear" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/" className="btn bg-transparent hover:rounded-full group text-white">
                    <FaDiscord className="w-6 h-6 text-gray-400 group-hover:text-brandColor transition-all duration-200 ease-linear" />
                </NavLink>
            </div>
            <div>
                <button onClick={()=> window.scrollTo(0,0)}><FaArrowAltCircleUp className="w-6 h-6 text-gray-400 hover:text-brandColor" /></button>
            </div>
        </div>
    </div>
  )
}

export default RightFloatingNavbar