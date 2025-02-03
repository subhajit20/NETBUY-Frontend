import { Fragment, lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
const HomePageRoutes = lazy(()=> import("./pages/homepageroutes/HomePageRoutes"));
const CommonFooter = lazy(()=> import("./components/footer/CommonFooter"));
const AuthPages = lazy(()=> import("./pages/authpages/AuthRoutes"))
import Loader from './components/common/spinners/Loader';


function App() {
  return (
      <Fragment>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<HomePageRoutes />} />
            <Route path="/auth/*" element={<AuthPages />} />
          </Routes>
          <CommonFooter />
        </Suspense>
      </Fragment>
  )
}

export default App
