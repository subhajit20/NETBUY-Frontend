import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import FloatMenu from './components/common/FloatMenu';
function App() {

  return (
    <div className='min-h-screen relative'>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <FloatMenu />
    </div>
  )
}

export default App
