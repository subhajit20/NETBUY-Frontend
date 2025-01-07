import { NavLink } from "react-router-dom"
import NETBUY from '../../assets/NETBUY-LOGO.png'
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSunnyOutline } from "react-icons/io5";
import { LiaUserCheckSolid } from "react-icons/lia";
import { useMemo } from "react";


type Props = {}

function Navbar({}: Props) {
    let dropDownMenus = useMemo(() => {
        return {
            authenticated:[
                {name: "Profile", link: "/"},
                {name: "Cart", link: "/"},
                {name: "Orders", link: "/"},
                {name: "Log Out", link: "/"},
            ],
            unAuthenticated: [
                {name: "Log In", link: "/"},
                {name: "Sign Up", link: "/"},
            ]
        }
    },[])
  return (
        <nav className="navbar navbar-sticky navbar-glass bg-[#fff] rounded-none">
            <div className="navbar-start">
                <NavLink to="/" className="navbar-item">
                    <img src={NETBUY} height={120} width={120} alt="" />
                </NavLink>
            </div>
            <div className="hidden sm:navbar-center">
                <div className="flex items-center input input-md rounded-full justify-center bg-gray-200 border-none w-[30rem] md:max-w-[40rem]">
                    <BsSearch className="text-brandColor w-5 h-5" />
                    <input placeholder="Search Bar - Product url or name" type="search" className="input input-md bg-gray-200 border-none max-w-[40rem]" />
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label className="my-2" tabIndex={0}><LiaUserCheckSolid className="w-8 h-8 text-brandColor" /></label>
                    <div className="dropdown-menu">
                        {
                            dropDownMenus.unAuthenticated.map((menu, index) => (
                                <NavLink key={index} to={menu.link} className="dropdown-item text-sm">{menu.name}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="hidden lg:navbar-end">
                <a className="navbar-item"><IoSunnyOutline className="w-7 h-7" /></a>
                <a className="navbar-item"><HiOutlineShoppingCart className="w-7 h-7" /></a>
                        {
                            dropDownMenus.unAuthenticated.map((menu, index) => (
                                <NavLink key={index} to={menu.link} className="navbar-item btn btn-sm bg-brandColor text-white">{menu.name}</NavLink>
                            ))
                        }
            </div>
        </nav>
  )
}

export default Navbar