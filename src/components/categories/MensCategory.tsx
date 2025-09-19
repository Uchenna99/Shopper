import { useAppContext } from "../../hooks/AppContext";
import HeroButton from "../buttons/HeroButton";
import CardGrid from "../CardGrid";
import NavigationBar from "../navbar/NavigationBar";
import SortSelector from "../SortSelector";



const MensCategory = () => {
    const {  } = useAppContext();

    return (
    <>
        <div className="w-full relative">

          <NavigationBar/>

          <div className="w-full h-[300px] flex justify-center">
            <div className="w-[1300px] h-full max-w-full bg-orange-200 rounded-sm mt-[2px] flex items-center gap-[200px] px-5 md:px-20 
              relative overflow-hidden">

              <div className="flex flex-col gap-5 z-10">
                <h1 className="text-black-text text-3xl sm:text-4xl lg:text-5xl font-merienda-bold leading-normal">
                  Explore our Stellar <br /> Men's Collection
                </h1>

                <HeroButton title="Explore"/>
              </div>

              <img 
                src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1758235659/Adobe_Express_-_file_2_-min_gvfg95.png" 
                alt="young man" 
                className="w-[400px] absolute top-15 sm:-top-3 -right-10 sm:right-0 lg:right-1/6 rotate-y-180 max-sm:opacity-70"
              />

            </div>
          </div>


          <div className="w-full flex flex-col items-center py-10">

            <div className="w-[1300px] max-w-full flex items-center justify-end px-3">
              <SortSelector/>

            </div>

            <CardGrid/>
          </div>
            
        </div>
    </>
  )
}

export default MensCategory;