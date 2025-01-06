import { NavLink } from "react-router-dom"
import NETBUY from '../../assets/NETBUY-LOGO.png'
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { LiaUserCheckSolid } from "react-icons/lia";


type Props = {}

function Navbar({}: Props) {
  return (
        <nav className="navbar navbar-sticky navbar-glass bg-[#fff] rounded-none">
            <div className="navbar-start">
                <NavLink to="/" className="navbar-item">
                    <img src={NETBUY} height={120} width={120} alt="" />
                </NavLink>
            </div>
            <div className="hidden sm:navbar-center">
                <div className="flex items-center input input-md justify-center bg-gray-200 border-none w-[30rem] md:max-w-[40rem]">
                    <BsSearch className="text-brandColor w-5 h-5" />
                    <input placeholder="Search Bar - Product url or name" type="search" className="input input-md bg-gray-200 border-none max-w-[40rem]" />
                </div>
            </div>

            <div className="dropdown lg:hidden pl-2 navbar-end">
                <label className="my-2" tabIndex={0}><LiaUserCheckSolid className="w-6 h-6 text-brandColor" /></label>
                <div className="dropdown-menu dropdown-menu-bottom-left">
                    <a tabIndex={-1} className="dropdown-item text-sm menu-item"><CiLogin className="text-brandColor w-5 h-5" />Log In</a>
                    <a tabIndex={-1} className="dropdown-item text-sm">Sign Up</a>
                </div>
            </div>
            <div className="hidden lg:navbar-end">
                <a className="navbar-item"><IoSunnyOutline className="w-7 h-7" /></a>
                <a className="navbar-item"><HiOutlineShoppingCart className="w-7 h-7" /></a>
                <a className="navbar-item btn btn-sm bg-brandColor text-white">Log In</a>
                <a className="navbar-item btn btn-sm bg-brandColor text-white">Sign Up</a>
            </div>
        </nav>
  )
}

export default Navbar