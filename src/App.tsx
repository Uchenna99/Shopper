import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'
// import MensCategory from './components/categories/MensCategory'
// import WomensCategory from './components/categories/WomensCategory'
// import ChildrensCategory from './components/categories/ChildrensCategory'
// import ShoesCollection from './components/categories/ShoesCollection'
// import BagsCollection from './components/categories/BagsCollection'
// import AccessoriesCategory from './components/categories/AccessoriesCategory'
// import ProductDetailsPage from './components/ProductDetailsPage'
// import Checkout from './pages/Checkout'
// import ShoppingCart from './pages/ShoppingCart'
import Landing from './components/homepage/Landing'
import { useAppContext } from './hooks/AppContext'
// import PaymentSuccessful from './components/confirmations/PaymentSuccessful'
import { Toaster } from 'sonner'
// import Login from './pages/Login'
// import Signup from './pages/SignUp';
// import Account from './pages/UserAccount';
// import ForgotPassword from './pages/ForgotPassword'
// import VerifyOtp from './pages/VerifyOtp'
// import About from './pages/AboutUs';
// import PaymentSuccess from './components/PaymentSuccess';
import ProtectedRoute from './pages/ProtectedRoute'
import React, { Suspense } from 'react'

const Login = React.lazy(()=> import("./pages/Login"));
const Signup = React.lazy(()=> import("./pages/SignUp"));
const ForgotPassword = React.lazy(()=> import("./pages/ForgotPassword"));
const VerifyOtp = React.lazy(()=> import("./pages/VerifyOtp"));
const Account = React.lazy(()=> import("./pages/UserAccount"));
const PaymentSuccessful = React.lazy(()=> import("./components/confirmations/PaymentSuccessful"));

const MensCategory = React.lazy(()=> import("./components/categories/MensCategory"));
const WomensCategory = React.lazy(()=> import("./components/categories/WomensCategory"));
const ChildrensCategory = React.lazy(()=> import("./components/categories/ChildrensCategory"));
const ShoesCollection = React.lazy(()=> import("./components/categories/ShoesCollection"));
const BagsCollection = React.lazy(()=> import("./components/categories/BagsCollection"));
const AccessoriesCategory = React.lazy(()=> import("./components/categories/AccessoriesCategory"));
const ProductDetailsPage = React.lazy(()=> import("./components/ProductDetailsPage"));
const ShoppingCart = React.lazy(()=> import("./pages/ShoppingCart"));
const Checkout = React.lazy(()=> import("./pages/Checkout"));
const About = React.lazy(()=> import("./pages/AboutUs"));
const PaymentSuccess = React.lazy(()=> import("./components/PaymentSuccess"));

function App() {
  const { paymentSuccess, isloggedIn } = useAppContext();


  return (
    <>
      <Toaster richColors position="top-right" />

      <Suspense fallback={<div className='w-full h-screen grid place-items-center'><p>Loading...</p></div>}>

        <Routes>

          <Route path='/login' element={isloggedIn? <Navigate to="/account" replace /> : <Login/>} />
          <Route path='/signup' element={isloggedIn? <Navigate to="/account" replace /> : <Signup/>} />
          <Route path='/forgot-password' element={isloggedIn? <Navigate to="/account" replace /> : <ForgotPassword/>} />
          <Route path='/verify-otp' element={isloggedIn? <Navigate to="/account" replace /> : <VerifyOtp/>} />
          <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />

          <Route path='/' element={<Landing/>} >

            <Route index element={<HomePage/>} />
            <Route path='men' element={<MensCategory/>} />
            <Route path='women' element={<WomensCategory/>} />
            <Route path='children' element={<ChildrensCategory/>} />
            <Route path='shoes' element={<ShoesCollection/>} />
            <Route path='bags' element={<BagsCollection/>} />
            <Route path='accessories' element={<AccessoriesCategory/>} />
            <Route path=':category/productdetails' element={<ProductDetailsPage/>} />
            <Route path='cart' element={<ShoppingCart/>} />
            <Route path='buynow/checkout' element={<Checkout/>} />
            <Route path='about' element={<About/>} />
            <Route path='payment-result' element={<PaymentSuccess/>} />
            
          </Route>
          
          <Route path='*' element={<NotFound />} />

        </Routes>

      </Suspense>

      {
        paymentSuccess &&
        <Suspense fallback={null}>
          <PaymentSuccessful/>
        </Suspense>
      }

    </>
  )
}

export default App
