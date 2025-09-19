import { useAppContext } from "../../hooks/AppContext";
import HeroButton from "../buttons/HeroButton";
import CardGrid from "../CardGrid";
import NavigationBar from "../navbar/NavigationBar";



const MensCategory = () => {
    const {  } = useAppContext();

    return (
    <>
        <div className="w-full relative">

          <NavigationBar/>

          <div className="w-full h-[300px] flex justify-center">
            <div className="w-[1300px] h-full max-w-full bg-orange-200 rounded-sm mt-[2px] flex items-center gap-[200px] px-20 
              relative overflow-hidden">

              <div className="flex flex-col gap-5">
                <h1 className="text-black-text text-5xl font-merienda-bold leading-normal">
                  Explore our Stellar <br /> Men's Collection
                </h1>

                <HeroButton title="Explore"/>
              </div>

              <img 
                src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1758235659/Adobe_Express_-_file_2_-min_gvfg95.png" 
                alt="young man" 
                className="w-[400px] absolute -top-3 right-1/5 rotate-y-180"
              />

            </div>
          </div>


          <CardGrid/>
            
        </div>
    </>
  )
}

export default MensCategory;