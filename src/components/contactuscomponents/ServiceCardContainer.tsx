import ContactUsServiceCard from "../cards/ContactUsServiceCard";
import { IoCube } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { TiUser } from "react-icons/ti";
import { RiWechatFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";


type Props = {}

function ServiceCardContainer({}: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-24">
        <ContactUsServiceCard serviceButtonName="Visit 'My Order'" serviceSuperHeading={"Order Enquiry"} serviceSubHeading={"Purchases, shipment verification, return/ refunds etc."} serviceIcon={<IoCube className="w-8 h-8" />} />
        <ContactUsServiceCard serviceButtonName="Visit 'My Parcel'" serviceSuperHeading={"Parcel Enquiry"} serviceSubHeading={"Unable to track parcels, logistic updates and parcel details."} serviceIcon={<CiDeliveryTruck className="w-8 h-8" />} />
        <ContactUsServiceCard serviceButtonName="Customer Service" serviceSuperHeading={"Online Customer Service"} serviceSubHeading={"9am to 6pm Live Chat service. You can ask us any questions here,and we’ll respond on the spot."} serviceIcon={<TiUser className="w-8 h-8" />} />
        <ContactUsServiceCard serviceButtonName="Send Email" serviceSuperHeading={"Question And Suggestion"} serviceSubHeading={"Pinfo@cssbuy.com Please drop us an email."} serviceIcon={<RiWechatFill className="w-8 h-8" />} />
        <ContactUsServiceCard serviceButtonName="Join Discord" serviceSuperHeading={"Discord Support."} serviceSubHeading={"Join our Discord, and put your feedback into our feedback channel, our team will review to implement."} serviceIcon={<FaDiscord className="w-8 h-8" />} />
    </div>
  )
}

export default ServiceCardContainer