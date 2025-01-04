import BannerImage from '../../assets/BANNER.webp';
import { BsSearch } from "react-icons/bs";
import './banner.css'
// import { useEffect } from 'react';

type Props = {}

function Banner({}: Props) {
    
  return (
    <div id="banner" className='relative'>
        <div>
            <div className='content absolute min-h-full min-w-full z-20 top-0 pt-16 flex flex-col justify-start items-center'>
                <div className='super_heading pt-10 sm:pt-20 lg:pt-32'>
                    <h1 className='text-white text-2xl sm:text-4xl lg:text-7xl text-center'>Connecting the Chinese</h1>
                    <h1 className='text-white text-xl sm:text-2xl lg:text-6xl text-center'>Market with the world</h1>
                </div>

                <div className='sub_heading hidden sm:block pt-10 lg:pt-20 max-w-[40rem] lg:max-w-[50rem] px-2'>
                    <h2 className='text-white text-sm lg:text-lg text-center'>No matter where you’re from, our services are here to help you purchase safely, and</h2>
                    <h3 className='text-white text-sm lg:text-lg text-center'>effectively from the Chinese Market.</h3>
                </div>

                <div className='sub_heading pt-20 w-full flex justify-center items-center'>
                    <div className='w-[15rem] sm:w-[20rem] lg:w-[40rem] bg-white flex justify-center items-center rounded-full px-5'>
                        <BsSearch className='w-7 h-7' />
                        <input type="search" className='input input-sm sm:input-md lg:input-lg placeholder:text-lg max-w-[40rem] border-none' placeholder='Start by Searching with a URL' />
                    </div>
                </div>
            </div>
            <div className='min-h-full min-w-full bg-black opacity-80 absolute z-10 top-0 pt-16'>
            </div>
            <img src={BannerImage} width={100} height={100} className='w-full max-h-[50rem] h-auto pt-16' alt="" />
        </div>
    </div>
  )
}

export default Banner