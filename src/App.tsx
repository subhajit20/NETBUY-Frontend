import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  )
}

export default App
