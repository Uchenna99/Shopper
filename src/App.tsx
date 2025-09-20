import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import MensCategory from './components/categories/MensCategory'
import NotFound from './components/NotFound'
import WomensCategory from './components/categories/WomensCategory'
import ChildrensCategory from './components/categories/ChildrensCategory'
import ShoesCollection from './components/categories/ShoesCollection'
import BagsCollection from './components/categories/BagsCollection'
import AccessoriesCategory from './components/categories/AccessoriesCategory'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/men' element={<MensCategory/>} />
        <Route path='/women' element={<WomensCategory/>} />
        <Route path='/children' element={<ChildrensCategory/>} />
        <Route path='/shoes' element={<ShoesCollection/>} />
        <Route path='/bags' element={<BagsCollection/>} />
        <Route path='/accessories' element={<AccessoriesCategory/>} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </>
  )
}

export default App
