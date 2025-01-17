import { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
const HomePageRoutes = lazy(()=> import("./pages/homepageroutes/HomePageRoutes"));
import Loader from './components/common/spinners/Loader';


function App() {
  return (
      <Routes>
        <Route path="/*" element={<Suspense fallback={<Loader />}><HomePageRoutes /></Suspense>} />
      </Routes>
  )
}

export default App
