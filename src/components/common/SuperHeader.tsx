
type Props = {
    headingText: string;
}

function SuperHeader(props: Props) {
    const { headingText } = props;
  return (
    <h5 className="pt-10 md:pt-5" id="super_Heading">
            <span className="bg-brandColor text-white px-5 py-1 rounded-full text-base md:text-lg lg:text-xl">{headingText}</span>
        </h5>
  )
}

export default SuperHeader