import React, { useEffect } from "react"
import Banner from "../banners/Banner"
type Props = {}

function HomeRoot({}: Props) {

    // decalred the page title
    useEffect(() => { window.document.title = "NETBUY - Home"}, [])
  return (
    <React.Fragment>
        <Banner />
    </React.Fragment>
  )
}

export default HomeRoot