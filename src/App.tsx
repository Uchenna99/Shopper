import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MensCategory from './components/categories/MensCategory'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/Men' element={<MensCategory/>} />
        
      </Routes>
    </>
  )
}

export default App
