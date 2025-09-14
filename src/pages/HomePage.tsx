import CashBack from "../components/homepage/CashBack"
import DealsOfDay from "../components/homepage/DealsOfDay"
import Hero from "../components/homepage/Hero"
import TopCategories from "../components/homepage/TopCategories"
import NavigationBar from "../components/navbar/NavigationBar"


const HomePage = () => {
  return (
    <>
    <div className="w-full relative">

      <NavigationBar/>
      
      <Hero/>

      <TopCategories/>

      <DealsOfDay/>

      <CashBack/>

    </div>
    </>
  )
}

export default HomePage