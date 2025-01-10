
import OrderingProcessCardContainer from "./OrderingProcessCardContainer";
import SuperHeader from "../common/SuperHeader";
type Props = {}

function OrderingProcess({}: Props) {
  return (
    <div className="min-h-[50rem] bg-blue-50 flex flex-col items-center justify-center p-10" id="OrderingProcess">
      <SuperHeader headingText="Ordering Process" />
        <div className="ordering_process_headings pt-10">
            <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-7xl">
                Step-by-Step Guide to Placing 
            </h1>
            <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl text-center pt-0 md:pt-2">
             an Order Online
            </h1>
        </div>
        <OrderingProcessCardContainer />
    </div>
  )
}

export default OrderingProcess