import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Jasurbek/Home.jsx"
import Muhammadsoli from "./pages/Muhammadsoli/Muhammadsoli.jsx"
import Mirshoxid from "./pages/Mirshoxid/Mirshoxid.jsx"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muhammadsoli" element={<Muhammadsoli />} />
        <Route path="/mirshoxid" element={<Mirshoxid />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
