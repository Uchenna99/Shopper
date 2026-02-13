// import CardsSlide from "../components/CardsSlide";
// import DealsOfDay from "../components/homepage/DealsOfDay"
import CashBack from "../components/homepage/CashBack"
import Hero from "../components/homepage/Hero"
import TopCategories from "../components/homepage/TopCategories"
import NavigationBar from "../components/navbar/NavigationBar";
import OurServices from "../components/homepage/OurServices"
import Footer from "../components/Footer"
import { useLocation, useNavigate } from "react-router-dom"
import React, { Suspense, useEffect } from "react"

const DealsOfDay = React.lazy(()=> import("../components/homepage/DealsOfDay"));
const CardsSlide = React.lazy(()=> import("../components/CardsSlide"));


const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (location.state?.scrollTo) {
      window.scrollTo({
        top: location.state.scrollTo,
        behavior: "smooth"
      });
    }
    navigate(location.pathname, { replace: true });
  }, [location.state]);

  return (
    <>
    <div className="w-full relative">

      <NavigationBar/>
      
      <Hero/>

      <TopCategories/>

      <Suspense fallback={null}>
        <DealsOfDay/>
      </Suspense>

      <CashBack/>

      <Suspense fallback={null}>
        <CardsSlide
          title="Best Sellers"
          customClass="slider2"
        />
      </Suspense>

      <OurServices/>

      <Footer/>

    </div>
    </>
  )
}

export default HomePage