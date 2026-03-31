import './App.css'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./pages/Jasurbek/Home.jsx"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App
