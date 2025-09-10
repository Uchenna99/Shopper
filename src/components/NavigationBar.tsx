import logo from "../assets/Icons/online-shopping_3081648.svg";
import NavOption from "./NavOption";

const NavigationBar = () => {
  

  return (
    <>
        <div className="w-full h-20 bg-white flex justify-center sticky top-0">
            <div className="w-[1300px] h-full flex items-center justify-between">

                <div className=" flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-250">
                    <img src={logo} alt="" className="w-11 h-11" />
                    <h1 className="text-2xl font-monster font-monts-bold"><span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span></h1>
                </div>


                <div className="h-full flex items-center gap-6 text-[#2b2726]">
                  
                  <NavOption/>

                  <p className="text-lg font-monts-medium">About us</p>

                  <p className="text-lg font-monts-medium">Support</p>

                </div>

            </div>
        </div>
    </>
  )
}

export default NavigationBar;