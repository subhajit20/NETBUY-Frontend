import React, { useEffect } from "react"
import Banner from "../banners/Banner"
type Props = {}

function HomeRoot({}: Props) {

    // decalred the page title
    useEffect(() => { window.document.title = "NETBUY - Home"}, [])
  return (
    <React.Fragment>
        <Banner />
        {/* <div className="min-h-screen bg-green-400"></div>
        <div className="min-h-screen bg-gray-400"></div> */}
    </React.Fragment>
  )
}

export default HomeRoot