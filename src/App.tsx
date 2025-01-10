import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePageRoutes from './pages/homepageroutes/HomePageRoutes';

function App() {
  return (
      <Routes>
        <Route path="/*" Component={HomePageRoutes} />
      </Routes>
  )
}

export default App
