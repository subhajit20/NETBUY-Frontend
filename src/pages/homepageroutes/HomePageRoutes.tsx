import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import HomeRoot from '../../components/HomePageComponents/HomeRoot';
import FloatMenu from '../../components/common/FloatMenu';
import RightFloatingNavbar from '../../components/common/RightFloatingNavbar';
import ContactUs from '../../components/contactuscomponents/ContactUs';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function HomePageRoutes() {
  return (
    <React.Fragment>
        <div className='relative hoom_root'>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index Component={HomeRoot} />
                        <Route path="/service" Component={ContactUs} />
                    </Route>
                </Routes>
            <FloatMenu />
            <FloatingWhatsApp phoneNumber={''} accountName={''} />
            <RightFloatingNavbar />
        </div>
    </React.Fragment>
  )
}

export default HomePageRoutes