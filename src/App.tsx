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
import ProductDetailsPage from './components/ProductDetailsPage'
import Landing from './components/homepage/Landing'
import Checkout from './pages/Checkout'
import ShoppingCart from './pages/ShoppingCart'
import { useAppContext } from './hooks/AppContext'
import PaymentSuccessful from './components/confirmations/PaymentSuccessful'
import Login from './pages/Login'
import Signup from './pages/SignUp'

function App() {
  const { paymentSuccess } = useAppContext();

  return (
    <>
      <Routes>

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />

        <Route path='/' element={<Landing/>} >

          <Route index element={<HomePage/>} />
          <Route path='/men' element={<MensCategory/>} />
          <Route path='/women' element={<WomensCategory/>} />
          <Route path='/children' element={<ChildrensCategory/>} />
          <Route path='/shoes' element={<ShoesCollection/>} />
          <Route path='/bags' element={<BagsCollection/>} />
          <Route path='/accessories' element={<AccessoriesCategory/>} />
          <Route path=':category/productdetails' element={<ProductDetailsPage/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/buynow/checkout' element={<Checkout/>} />
          
        </Route>
        
        <Route path='*' element={<NotFound />} />

      </Routes>

      {
        paymentSuccess &&
        <PaymentSuccessful/>
      }

    </>
  )
}

export default App
