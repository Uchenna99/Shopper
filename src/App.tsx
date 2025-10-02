import { Navigate, Route, Routes } from 'react-router-dom'
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
import Account from './pages/UserAccount'
import { Toaster } from 'sonner'
import ForgotPassword from './pages/ForgotPassword'
import VerifyOtp from './pages/VerifyOtp'
import About from './pages/AboutUs'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  const { paymentSuccess, isloggedIn } = useAppContext();


  return (
    <>
      <Toaster richColors position="top-right" />

      <Routes>

        <Route path='/login' element={isloggedIn? <Navigate to="/account" replace /> : <Login/>} />
        <Route path='/signup' element={isloggedIn? <Navigate to="/account" replace /> : <Signup/>} />
        <Route path='/forgot-password' element={isloggedIn? <Navigate to="/account" replace /> : <ForgotPassword/>} />
        <Route path='/verify-otp' element={isloggedIn? <Navigate to="/account" replace /> : <VerifyOtp/>} />
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />

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
          <Route path='/about' element={<About/>} />
          
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
