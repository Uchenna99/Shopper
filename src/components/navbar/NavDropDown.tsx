import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/AppContext";


const NavDropDown = () => {
  const { showMenu, setShowMenu, setShowCategories, showCategories } = useAppContext();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);

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


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
    if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
    ) {
        setShowCategories(false);
    }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <motion.div className="w-full p-10 bg-white flex flex-col items-center gap-5 absolute left-0 z-40 
        font-monts-medium lg:hidden shadow-sm"
        initial={{top:'-110%'}}
        animate={showMenu? {top:90}:{}}
        ref={dropdownRef}>

        <div className="h-9 flex items-center" ref={categoriesRef}>
          <div className="flex items-center gap-1" 
            onClick={()=>setShowCategories(!showCategories)}>
              <p className="">Categories</p>
              <ChevronDown 
                  size={15} 
                  strokeWidth={2.5}
                  color={showCategories? '#ff8904' : '#2b2726'}
                  className={`mt-1 transition-all duration-200 ${showCategories? 'rotate-180':''}`}
              />
          </div>
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