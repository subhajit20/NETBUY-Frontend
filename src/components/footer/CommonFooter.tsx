import NETBUYLOGO from '../../assets/NETBUY-LOGO.png';

function CommonFooter() {
  return (
    <section className="footer bg-black flex justify-center items-center">
            <div className='flex flex-wrap justify-center gap-10 lg:gap-28 py-20 md:py-10'>
                <div className="logo flex flex-col gap-4">
                    <a href="/" className="company_log">
                        <img src={NETBUYLOGO} width={150} height={150} alt="logo" />
                    </a>

                    <div className="company_info flex flex-col justify-start items-start text-gray-400">
                        <ul>
                            <li className='font-light text-gray-400'>Company Name : NETBUY</li>
                            <li className='font-light text-gray-400'>Company Number : 77425277</li>
                            <li className='font-light text-gray-400'>RM 102， 1/F THE CLOUD 111TUNG CHAU ST</li>
                            <li className='font-light text-gray-400'>TAI KOK TSUIHONG KONG</li>
                        </ul>
                    </div>
                    <p className='text-gray-500 self-start font-normal'>2025 ©NETBUY ALL Rights Reserved</p>
                </div>
                <div className="quickLinks flex justify-start items-start text-gray-100 gap-10 lg:gap-20">
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-white'>Quick Links :</li>
                        <li className='font-light text-gray-400'>Buy For Me</li>
                        <li className='font-light text-gray-400'>Expert Buy</li>
                        <li className='font-light text-gray-400'>Ship For Me</li>
                        <li className='font-light text-gray-400'>Search For Me</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-white'>User Interactions :</li>
                        <li className='font-light text-gray-400'>Base knowledge</li>
                        <li className='font-light text-gray-400'>Our Services</li>
                        <li className='font-light text-gray-400'>Return Process</li>
                    </ul>
                </div>
                <div className="quickLinks flex justify-start items-start text-gray-100 gap-10 lg:gap-20">
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-white'>Useful :</li>
                        <li className='font-light text-gray-400'>Storage Deadline</li>
                        <li className='font-light text-gray-400'>Insurance Policy</li>
                        <li className='font-light text-gray-400'>Return Policy</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-xl text-gray-white'>Legal :</li>
                        <li className='font-light text-gray-400'>Terms of Services</li>
                        <li className='font-light text-gray-400'>Privacy Policy</li>
                        <li className='font-light text-gray-400'>Contact Us</li>
                    </ul>
                </div>
            </div>
            
    </section>
  )
}

export default CommonFooter