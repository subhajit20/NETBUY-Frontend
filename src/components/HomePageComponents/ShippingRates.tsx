import ShippingImage from '../../assets/HomepagePicturenr2.png'
type Props = {}

function ShippingRates({}: Props) {
  return (
    <div className="min-h-[50rem] bg-gray-200 flex flex-col items-center justify-center p-10" id="shipping_rates">
        <h5 className="pt-10 md:pt-5" id="super_Heading">
            <span className="bg-brandColor text-white px-5 py-1 rounded-full">Shipping Rates</span>
        </h5>

        <div className="services_headings block xl:hidden pt-10">
            <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                We Provide The Most  
            </h1>
            <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl text-center">
            Efficient Logistics Services!
            </h1>
        </div>

        <div className='flex justify-center items-center gap-x-5 py-10'>
            <div className='relative hidden xl:flex'>
                <div className='absolute h-full w-full bg-black opacity-40 rounded-[40px]'>
                </div>
                <div className='absolute h-full w-full rounded-[40px] flex flex-col gap-y-4 justify-center items-start px-10'>
                    <h1 className='text-white text-3xl max-w-lg'>We Provide The Most Efficient Logistics Services!</h1>
                    <p className='text-white text-sm max-w-lg'>Estimate your international shipping fee ahead of time through shipping fee estimation</p>
                    <a className='btn btn-lg bg-brandColor text-white rounded-full'>Cost Calculator</a>
                </div>
                <img src={ShippingImage} width={620} height={620} alt="" className='rounded-[40px] min-w-full' />
            </div>
            <div id="shippingRates_card_container" className="flex flex-col justify-center gap-5">
                <div className="shippingRates_card bg-white p-5 rounded-lg shadow-lg flex flex-col gap-y-6">
                    <div className="upper flex justify-start items-center gap-x-5">
                        <h4>SHIPS TO USA</h4>
                        <h4>HZ-FEDEX-F</h4>
                        <h5 className="text-sm text-gray-400 font-normal">(0-20kg)</h5>
                    </div>
                    <div className="lower flex justify-start gap-x-5">
                        <h4 className="flex flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">First Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥235 / 500G</p>
                        </h4>
                        <h4 className="sm:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Additional Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥55 / 500G</p>
                        </h4>
                        <h4 className="md:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Delivery Time</p>
                            <p className="text-base text-gray-900 font-normal">5-10 days</p>
                        </h4>

                        <div className="pl-10">
                            <a className="btn border-[2px] border-brandColor rounded-full">View</a>
                        </div>
                    </div>
                </div>
                <div className="shippingRates_card bg-white p-5 rounded-lg shadow-lg flex flex-col gap-y-6">
                    <div className="upper flex justify-start gap-x-5 items-center">
                        <h4>SHIPS TO USA</h4>
                        <h4>HZ-FEDEX-F</h4>
                        <h5 className="text-sm text-gray-400 font-normal">(0-20kg)</h5>
                    </div>
                    <div className="lower flex justify-start gap-x-5">
                        <h4 className="flex flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">First Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥235 / 500G</p>
                        </h4>
                        <h4 className="sm:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Additional Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥55 / 500G</p>
                        </h4>
                        <h4 className="md:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Delivery Time</p>
                            <p className="text-base text-gray-900 font-normal">5-10 days</p>
                        </h4>

                        <div className="pl-10">
                            <a className="btn border-[2px] border-brandColor rounded-full">View</a>
                        </div>
                    </div>
                </div>
                <div className="shippingRates_card bg-white p-5 rounded-lg shadow-lg flex flex-col gap-y-6">
                    <div className="upper flex justify-start gap-x-5 items-center">
                        <h4>SHIPS TO USA</h4>
                        <h4>HZ-FEDEX-F</h4>
                        <h5 className="text-sm text-gray-400 font-normal">(0-20kg)</h5>
                    </div>
                    <div className="lower flex justify-start gap-x-5">
                        <h4 className="flex flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">First Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥235 / 500G</p>
                        </h4>
                        <h4 className="sm:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Additional Weight</p>
                            <p className="text-base text-gray-900 font-normal">CN￥55 / 500G</p>
                        </h4>
                        <h4 className="md:flex hidden flex-col justify-center gap-y-0 items-start">
                            <p className="text-sm text-gray-400 font-normal">Delivery Time</p>
                            <p className="text-base text-gray-900 font-normal">5-10 days</p>
                        </h4>

                        <div className="pl-10">
                            <a className="btn border-[2px] border-brandColor rounded-full">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <a className='btn btn-md xl:btn-lg bg-brandColor text-white rounded-full xl:hidden'>Cost Calculator</a>
    </div>
  )
}

export default ShippingRates