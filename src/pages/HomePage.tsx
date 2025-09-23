import CardsSlide from "../components/CardsSlide"
import CashBack from "../components/homepage/CashBack"
import DealsOfDay from "../components/homepage/DealsOfDay"
import Hero from "../components/homepage/Hero"
import TopCategories from "../components/homepage/TopCategories"
import NavigationBar from "../components/navbar/NavigationBar";
import products from "../assets/Data/Items.json";
import OurServices from "../components/homepage/OurServices"
import Footer from "../components/Footer"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"


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

      <DealsOfDay/>

      <CashBack/>

      <CardsSlide
        title="Best Sellers"
        products={products}
        customClass="slider2"
      />

      <OurServices/>

      <Footer/>

    </div>
    </>
  )
}

export default HomePage