import ServiceCardContainer from "./ServiceCardContainer"

type Props = {}

function OurServices({}: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10" id="ourServices">
        <h5 className="pt-16 pb-10" id="super_Heading">
            <span className="bg-brandColor text-white px-5 py-1 rounded-full">Our Services</span>
        </h5>
        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
            We offer our customers 
        </h1>
        <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl text-center">
            a range of amazing benefits
        </h1>

        {/* cards container */}
        <ServiceCardContainer />
    </div>
  )
}

export default OurServices