import Hero from "../components/Hero"
import NavigationBar from "../components/navbar/NavigationBar"


const HomePage = () => {
  return (
    <>
    <div className="w-full relative">

      <NavigationBar/>
      
      <Hero/>

    </div>
    </>
  )
}

export default HomePage