import { GrHomeRounded } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoReorderFour } from "react-icons/io5";


type Props = {}

function FloatMenu({}: Props) {
  return (
    <div className="fixed w-full bottom-0 px-8 py-2 block sm:hidden">
        <div className="float_menu bg-brandColor py-2 px-10 rounded-full">
            <nav className="flex justify-between items-center w-full text-white">
                <GrHomeRounded className="w-5 h-5" />
                <IoCartOutline className="w-6 h-6" />
                <CiUser className="w-6 h-6" />
                <IoReorderFour className="w-5 h-5" />
            </nav>
        </div>
    </div>
  )
}

export default FloatMenu