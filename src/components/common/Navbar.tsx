import { NavLink } from "react-router-dom"
import NETBUY from '../../assets/NETBUY-LOGO.png'
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaUserCheckSolid } from "react-icons/lia";
import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import LoginButton from "./buttons/login/LoginButton";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSunnyOutline } from "react-icons/io5";

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
                {name: "Log In", link: "/auth/login"},
                {name: "Sign Up", link: "/auth/register"},
            ]
        }
    },[])
  return (
        <>
        <nav className="navbar navbar-sticky navbar-glass bg-[#fff] rounded-none z-10">
            <div className="navbar-start">
                <NavLink to="/" className="navbar-item">
                    <img src={NETBUY} height={120} width={120} alt="" />
                </NavLink>
                <div className="hidden sm:flex items-center input input-sm rounded-full justify-center bg-gray-200 border-none w-[30rem] md:max-w-[40rem]">
                    <BsSearch className="text-brandColor w-5 h-5" />
                    <input placeholder="Search Bar - Product url or name" type="search" className="input input-sm bg-gray-200 border-none max-w-[40rem]" />
                </div>
            </div>
            {/* <div className="hidden sm:navbar-center">
            </div> */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown">
                    <label className="my-2 cursor-pointer" tabIndex={0}><LiaUserCheckSolid className="w-9 h-9 text-brandColor" /></label>
                    <div className="dropdown-menu">
                        {
                            dropDownMenus.unAuthenticated.map((menu, index) => (
                                <NavLink key={index} to={menu.link} className="hover:bg-brandColor hover:text-white dropdown-item text-lg">{menu.name}</NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="hidden lg:navbar-end">
                <a className="navbar-item hidden xl:block"><IoSunnyOutline className="w-6 h-6" /></a>
                <a className="navbar-item"><HiOutlineShoppingCart className="w-6 h-6" /></a>
                <div className="dropdown hidden xl:block dropdown-hover">
                    <label className="btn btn-sm bg-transparent my-2" tabIndex={0}>Company <IoMdArrowDropdown className="text-brandColor w-6 h-6" /></label>
                    <div className="dropdown-menu">
                        <NavLink to="/service" className="dropdown-item text-sm">Contact Us</NavLink>
                        <NavLink to="/" tabIndex={-1} className="dropdown-item text-sm">About Us</NavLink>
                    </div>
                </div>
                        {
                            dropDownMenus.unAuthenticated.map((menu, index) => (
                                <LoginButton key={index} to={menu.link} btnName={menu.name} />
                            ))
                        }
            </div>
        </nav>
        <Outlet />
        </>
  )
}

export default Navbar