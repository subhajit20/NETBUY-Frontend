import React, { useEffect } from "react";
import Banner from "../banners/Banner";
import OurServices from "./OurServices";

type Props = {}

function HomeRoot({}: Props) {

    // decalred the page title
    useEffect(() => { window.document.title = "NETBUY - Home"}, [])
  return (
    <React.Fragment>
      <div id="home" className="overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <Banner />
        <OurServices />
        {/* <div className="min-h-screen bg-green-400"></div>
        <div className="min-h-screen bg-gray-400"></div> */}
      </div>
    </React.Fragment>
  )
}

export default HomeRoot