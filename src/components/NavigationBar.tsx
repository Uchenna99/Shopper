import logo from "../assets/Icons/online-shopping_3081648.svg";
import NavOption from "./NavOption";
import SearchBar from "./SearchBar";
import NavRightOption from "./NavRightOption";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useMediaQuery } from "../hooks/MediaQuery";


const NavigationBar = () => {
  const isMobile = useMediaQuery("(max-width: 530px)");
  const [searching, setSearching] = useState(false);

  const startSearch = ()=>{
    if(!searching) { setSearching(true) };
  };


  return (
    <>
        <div className="w-full h-20 bg-white flex justify-center sticky top-0">
            <div className={`w-[1300px] max-w-full h-full flex items-center justify-between px-5 gap-2`}>

                <motion.div className={`flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-250`}>
                    <img src={logo} alt="" className="w-9 h-9 sm:w-11 sm:h-11" />
                    <h1 className="text-xl sm:text-2xl font-monster font-monts-bold"><span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span></h1>
                </motion.div>


                <div className="h-full flex items-center gap-6 text-black-text max-lg:hidden">
                  
                  <NavOption/>

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250 text-nowrap">
                    About us
                  </p>

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250">
                    Support
                  </p>

                </div>




                <div className="h-full flex items-center gap-6">

                  <motion.div className="h-full flex items-center cursor-pointer mr-3"
                    initial={{width:40}} animate={searching? {width:240}:{}} 
                    transition={{duration:0.3, ease:'easeInOut'}}
                    onClick={startSearch}>

                    <SearchBar searching={searching} close={()=> setSearching(false)}/>

                  </motion.div>

                  <NavRightOption title="Account"/>

                  <NavRightOption title="Cart"/>

                  <div className="w-10 h-full lg:hidden flex items-center justify-center">
                    <Menu
                      size={25}
                      
                    />
                  </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default NavigationBar;