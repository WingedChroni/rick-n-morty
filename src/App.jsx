import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Episodes from './pages/Episodes/Episodes';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/episodes' element={<Episodes />}/>
        <Route path='/details/:characterId' element={<CharacterDetails />}/>
      </Routes>
    
      <Footer />
    </BrowserRouter>
    // </div>
  )
}

export default App
