import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/components/Navbar'
import Country from './pages/Country'
import './assets/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:CountryName' element={<Country />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
