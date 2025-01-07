import { ReactNode } from "react";

type Props = {
    serviceSuperHeading: string;
    serviceSubHeading: string;
    icon: ReactNode
}

function ServiceCard(props: Props) {
    const { serviceSubHeading, serviceSuperHeading, icon } = props;
  return (
    <div className="service_cards hover:scale-[1.05] transition-all duration-300 cursor-pointer ease-linear card card-image-cover shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="card-body">
            <div className="avatar bg-brandColor text-white flex justify-center items-center">
                {icon}
            </div>
                <h2 className="card-header">{serviceSuperHeading}</h2>
                <p className="text-content2">{serviceSubHeading}</p>
                <div className="card-footer">
                    <button className="btn pl-0 btn-sm bg-transparent text-brandColor">Learn More</button>
                </div>
            </div>
        </div>
  )
}

export default ServiceCard