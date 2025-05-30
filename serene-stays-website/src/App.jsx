import './App.css'
import Home from './pages/Home'
import Virar from './pages/VillaPages/Virar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import VillaDetails from './pages/VillaDetails'
import About from './pages/About'
import PolicyPage from './pages/PolicyPage'
import Contact from './pages/Contact'
import Goa from './pages/VillaPages/Goa'
import Mahabaleshwar from './pages/VillaPages/Mahabaleshwar'
import Karjat from './pages/VillaPages/Karjat'
import Thailand from './pages/VillaPages/Thailand'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:location/villa-details" element={<VillaDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/policypage" element={<PolicyPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/virar" element={<Virar />} />
            <Route path="/goa" element={<Goa />} />
            <Route path="/mahabaleshwar" element={<Mahabaleshwar />} />
            <Route path="/karjat" element={<Karjat />} />
            <Route path="/thailand" element={<Thailand />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
