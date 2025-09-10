import logo from "../assets/Icons/online-shopping_3081648.svg";
import NavOption from "./NavOption";
import SearchBar from "./SearchBar";
import NavRightOption from "./NavRightOption";
import { useState } from "react";
import { motion } from "framer-motion";


const NavigationBar = () => {
  const [searching, setSearching] = useState(false);

  return (
    <>
        <div className="w-full h-20 bg-white flex justify-center sticky top-0">
            <div className="w-[1300px] max-w-full h-full flex items-center justify-between px-5">

                <div className=" flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-250">
                    <img src={logo} alt="" className="w-11 h-11" />
                    <h1 className="text-2xl font-monster font-monts-bold"><span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span></h1>
                </div>


                <div className="h-full flex items-center gap-6 text-[#2b2726]">
                  
                  <NavOption/>

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250">
                    About us
                  </p>

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250">
                    Support
                  </p>

                </div>


                <motion.div className="h-full flex items-center cursor-pointer"
                  initial={{width:40}} animate={searching? {width:240}:{}} transition={{duration:0.3, ease:'easeInOut'}}
                  onClick={()=>setSearching(!searching)}>
                  <SearchBar searching={searching}/>
                </motion.div>


                <div className="h-full flex items-center gap-5">

                  <NavRightOption title="Account"/>

                  <NavRightOption title="Cart"/>

                </div>

            </div>
        </div>
    </>
  )
}

export default NavigationBar;