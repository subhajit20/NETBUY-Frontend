import { Fragment, lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
const HomePageRoutes = lazy(()=> import("./pages/homepageroutes/HomePageRoutes"));
const CommonFooter = lazy(()=> import("./components/footer/CommonFooter"));
import Loader from './components/common/spinners/Loader';


function App() {
  return (
      <Fragment>
        <Routes>
          <Route path="/*" element={<Suspense fallback={<Loader />}><HomePageRoutes /></Suspense>} />
        </Routes>
        <CommonFooter />
      </Fragment>
  )
}

export default App
