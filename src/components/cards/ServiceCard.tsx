import { ReactNode } from "react";

type Props = {
    serviceSuperHeading: string;
    serviceSubHeading: string;
    icon: ReactNode
}

function ServiceCard(props: Props) {
    const { serviceSubHeading, serviceSuperHeading, icon } = props;
  return (
    <div className="service_cards hover:scale-[1.05] transition-all duration-300 cursor-pointer ease-linear card card-image-cover bg-white w-64 h-[20rem]">
            <div className="card-body">
            <div className="avatar avatar-xl bg-brandColor text-white flex justify-center items-center">
                {icon}
            </div>
                <h2 className="card-header">{serviceSuperHeading}</h2>
                <p className="text-content2 text-justify max-w-3xl">{serviceSubHeading}</p>
                <div className="card-footer">
                    <button className="btn pl-0 btn-sm bg-transparent text-brandColor">Learn More</button>
                </div>
            </div>
        </div>
  )
}

export default ServiceCard