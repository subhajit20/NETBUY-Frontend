import { ReactNode } from 'react'

type Props = {
    orderingSuperHeading: string;
    orderingSubHeading: string;
    btnName: string;
    btnLink?: string;
    icon: ReactNode;
}

function OrderingCard(props: Props) {
    const { orderingSuperHeading, orderingSubHeading, icon, btnName } = props;
  return (
    <div className="service_cards hover:scale-[1.05] transition-all duration-300 cursor-pointer ease-linear card card-image-cover shadow-none rounded-none bg-transparent">
                <div className="card-body flex flex-col justify-center items-center">
                <div className="avatar bg-brandColor text-white flex justify-center items-center">
                    {icon}
                </div>
                    <h2 className="card-header text-lg text-center">{orderingSuperHeading}</h2>
                    <p className="text-content2 text-center">{orderingSubHeading}</p>
                    <div className="card-footer">
                        <button className="btn pl-0 btn-sm bg-transparent text-brandColor">{btnName}</button>
                    </div>
                </div>
            </div>
  )
}

export default OrderingCard