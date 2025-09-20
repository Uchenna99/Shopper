import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MensCategory from './components/categories/MensCategory'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/men' element={<MensCategory/>} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </>
  )
}

export default App
