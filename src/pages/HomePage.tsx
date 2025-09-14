import CardsSlide from "../components/CardsSlide"
import CashBack from "../components/homepage/CashBack"
import DealsOfDay from "../components/homepage/DealsOfDay"
import Hero from "../components/homepage/Hero"
import TopCategories from "../components/homepage/TopCategories"
import NavigationBar from "../components/navbar/NavigationBar";
import products from "../assets/Data/Items.json";
import OurServices from "../components/homepage/OurServices"


const HomePage = () => {
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

    </div>
    </>
  )
}

export default HomePage