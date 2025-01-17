import { infinity } from 'ldrs'
import NETBUY from '../../../assets/NETBUY-LOGO.png'

type Props = {}


function Loader({}: Props) {
    infinity.register()
  return (
   <div className='flex flex-col bg-white justify-center gap-y-5 items-center min-h-screen'>
        <img src={NETBUY} width={150} height={150} alt="loader_img" />
        <l-infinity
        size="111"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3" 
        color="blue" 
        ></l-infinity>
   </div>
  )
}

export default Loader