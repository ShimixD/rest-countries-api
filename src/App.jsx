import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/components/Navbar'
import './assets/styles.css'
import Country from './pages/Country'

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
