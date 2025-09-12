import Hero from "../components/Hero"
import NavigationBar from "../components/navbar/NavigationBar"
import TopCategories from "../components/TopCategories"


const HomePage = () => {
  return (
    <>
    <div className="w-full relative">

      <NavigationBar/>
      
      <Hero/>

      <TopCategories/>

    </div>
    </>
  )
}

export default HomePage