import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/AppContext";
import CategoriesBurgerDropdown from "./CategoriesBurgerDropdown";


const NavDropDown = () => {
  const { showMenu, setShowMenu, setShowDropCategories, showDropCategories } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent)=> {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleShowCategories = ()=>{
    if(showDropCategories) { setShowDropCategories(false) }
    else { setShowDropCategories(true) }
  };


  return (
    <motion.div className={`w-full py-10 px-5 bg-white flex flex-col items-center gap-5 fixed left-0 z-40 
        font-monts-medium lg:hidden shadow-sm
        ${showDropCategories? 'max-h-[calc(100vh-80px)] overflow-y-scroll':''}`}
        initial={{top:'-110%'}}
        animate={showMenu? {top:90}:{}}
        ref={dropdownRef}>

        <div className="w-full flex flex-col items-center justify-center relative">
          <div className="h-9 flex items-center gap-1" 
            onClick={handleShowCategories}>
              <p className="">Categories</p>
              <ChevronDown 
                  size={15} 
                  strokeWidth={2.5}
                  color={showDropCategories? '#ff8904' : '#2b2726'}
                  className={`mt-1 transition-all duration-200 ${showDropCategories? 'rotate-180':''}`}
              />
          </div>
          { showDropCategories && <CategoriesBurgerDropdown/> }
          
        </div>

        <div className="h-9 flex items-center">
          <p className="text-black-text">About us</p>
        </div>

        <div className="h-9 flex items-center">
          <p className="text-black-text">Support</p>
        </div>

    </motion.div>
  )
}

export default NavDropDown;