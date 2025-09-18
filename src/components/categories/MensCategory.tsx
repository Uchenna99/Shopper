import { useAppContext } from "../../hooks/AppContext";
import HeroButton from "../buttons/HeroButton";
import NavigationBar from "../navbar/NavigationBar";



const MensCategory = () => {
    const {  } = useAppContext();

    return (
    <>
        <div className="w-full relative">

          <NavigationBar/>

          <div className="w-full h-[300px] flex justify-center">
            <div className="w-[1300px] h-full bg-orange-200 rounded-sm mt-[2px] flex items-center px-20">

              <div className="flex flex-col gap-5">
                <h1 className="text-black-text text-4xl font-merienda-bold leading-normal">
                  Explore our Stellar <br /> Men's Collection
                </h1>

                <HeroButton title="Explore"/>
              </div>
            </div>
          </div>
            
        </div>
    </>
  )
}

export default MensCategory;