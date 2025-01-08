import ServiceCard from "../cards/ServiceCard";
import { FaShippingFast } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";


type Props = {}

function ServiceCardContainer({}: Props) {
  return (
    <div id="servcie_card_container" className="flex flex-wrap flex-col md:flex-row justify-center gap-10 pt-10">
        <ServiceCard icon={<HiMiniShoppingCart className="w-10 h-10" />} serviceSuperHeading={"Buy For Me"} serviceSubHeading={"We purchase products from China online stores on behalf of you"} />
        <ServiceCard icon={<FaShippingFast className="w-10 h-10" />} serviceSuperHeading={"Ship For Me"} serviceSubHeading={"Shop with the massive Chinese marketplaces you desire and send to our Warehouse address yourself!"} />
        <ServiceCard icon={<AiFillMessage className="w-10 h-10" />} serviceSuperHeading={"Asking Question"} serviceSubHeading={"We can contact sellers on massive Chinese based marketplaces, and ask them questions on your behalf."} />
    </div>
  )
}

export default ServiceCardContainer