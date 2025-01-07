import OrderingCard from "../cards/OrderingCard"
import { AiOutlineUser } from "react-icons/ai";
import { CiCreditCard2 } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";

type Props = {}

function OrderingProcessCardContainer({}: Props) {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-0 md:gap-10 pt-10">
        <OrderingCard btnName="Create Account" icon={<AiOutlineUser className="w-7 h-7" />} orderingSuperHeading="Become a member" orderingSubHeading="You can create your account and register on our platform." />
        <OrderingCard btnName="View buyers guide" icon={<CiCreditCard2 className="w-7 h-7" />} orderingSuperHeading="Buy The Items You Want" orderingSubHeading="You can browse through our stores or order through links." />
        <OrderingCard btnName="" icon={<FaBox className="w-7 h-7" />} orderingSuperHeading="SKU verification conducted by us" orderingSubHeading="Once the item arrives at our warehouse, we will verify its appearance, size, etc., for you." />
        <OrderingCard btnName="Process The Shipment" icon={<FaShippingFast className="w-7 h-7" />} orderingSuperHeading="Process The Shipment" orderingSubHeading="Once everything done you can process for the shipping." />
    </div>
  )
}

export default OrderingProcessCardContainer