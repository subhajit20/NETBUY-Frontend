import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import HomeRoot from '../../components/HomePageComponents/HomeRoot';
import FloatMenu from '../../components/common/FloatMenu';
import RightFloatingNavbar from '../../components/common/RightFloatingNavbar';

function HomePageRoutes() {
  return (
    <React.Fragment>
        <div className='min-h-screen relative'>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index Component={HomeRoot} />
                    </Route>
                </Routes>
            <FloatMenu />
            <RightFloatingNavbar />
        </div>
    </React.Fragment>
  )
}

export default HomePageRoutes