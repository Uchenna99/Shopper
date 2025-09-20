import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MensCategory from './components/categories/MensCategory'
import NotFound from './components/NotFound'
import WomensCategory from './components/categories/WomensCategory'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/men' element={<MensCategory/>} />
        <Route path='/women' element={<WomensCategory/>} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </>
  )
}

export default App
