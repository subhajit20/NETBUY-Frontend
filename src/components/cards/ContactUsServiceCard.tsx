import { ReactNode } from 'react'

type Props = {
    serviceIcon: ReactNode
    serviceSuperHeading: string;
    serviceSubHeading: string;
    serviceButtonName: string;
}

function ContactUsServiceCard({ serviceIcon, serviceSuperHeading, serviceSubHeading, serviceButtonName }: Props) {
  return (
    <div className="relative service_cards hover:scale-[1.05] transition-all duration-300 cursor-pointer ease-linear card card-image-cover bg-white sm:w-72 min-w-64 h-[20rem] md:h-[25rem] rounded-[25px]">
            <div className="card-body">
            <div className="avatar avatar-xl bg-brandColor text-white flex justify-center items-center">
                {serviceIcon}
            </div>
                <h2 className="card-header font-medium">{serviceSuperHeading}</h2>
                <p className="text-content2 font-normal text-left max-w-3xl text-xs sm:text-sm md:text-base">{serviceSubHeading}</p>
                <div className="card-footer absolute bottom-0 w-full left-0 py-2 px-2">
                    <button className="btn btn-md rounded-full bg-brandColor w-full pl-0 text-base text-white font-normal">{serviceButtonName}</button>
                </div>
            </div>
        </div>
  )
}

export default ContactUsServiceCard