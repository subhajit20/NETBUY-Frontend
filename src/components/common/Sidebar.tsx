import { TiArrowBackOutline } from "react-icons/ti";
import { NavLink } from "react-router-dom";


type Props = {}

function Sidebar({}: Props) {
  return (
    <div id="sidebar" className="absolute z-20 right-0 top-0">
        <input type="checkbox" id="drawer-right" className="drawer-toggle" />
        <label className="overlay" htmlFor="drawer-right"></label>
        <div className="drawer drawer-right">
            <div className="drawer-content pt-10 flex flex-col h-full">
                <label htmlFor="drawer-right" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                <div>
                    {/* <h2 className="text-xl font-medium">Create your account</h2> */}
                    <label htmlFor="drawer-right" className="btn btn-sm btn-circle btn-ghost pt-14"><TiArrowBackOutline className="w-8 h-8 text-brandColor" /></label>
                    <div className="menus p-0 flex flex-col items-start">
                        <NavLink to="" className={'text-lg text-right py-2 menu-item w-full'}>Dashboard</NavLink>
                        <NavLink to="" className={'text-lg text-right py-2 menu-item w-full'}>Warehouse</NavLink>
                        <NavLink to="" className={'text-lg text-right py-2 menu-item w-full'}>Orders</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar