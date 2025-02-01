import './App.css'
import Home from './pages/Home'
import Virar from './pages/VillaPages/Virar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import VillaDetails from './pages/VillaDetails'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/virar" element={<Virar />} />
            <Route path="/:location/villa-details" element={<VillaDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
