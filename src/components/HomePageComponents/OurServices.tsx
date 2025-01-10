import ServiceCardContainer from "./ServiceCardContainer";
import SuperHeader from "../common/SuperHeader";

type Props = {}

function OurServices({}: Props) {
  return (
    <div className="min-h-[50rem] bg-gray-200 flex flex-col items-center justify-center p-10" id="ourServices">
        <SuperHeader headingText="Our Services" />
        <div className="services_headings pt-10">
            <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                We offer our customers 
            </h1>
            <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl text-center">
                a range of amazing benefits
            </h1>
        </div>

        {/* cards container */}
        <ServiceCardContainer />
    </div>
  )
}

export default OurServices