import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CategoriesDropdown from "./CategoriesDropdown";
import { useAppContext } from "../../hooks/AppContext";


const NavOption = () => {
    const { showCategories, setShowCategories } = useAppContext();
    const [hovering, setHovering] = useState(false);

    const categoriesRef = useRef<HTMLDivElement | null>(null);

    const toggleCategories = ()=>{
        if(!showCategories) { setShowCategories(true) }
        else{ setShowCategories(false) }
    };

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
    <div className="relative" ref={categoriesRef}>

        <div className="h-6 flex items-center gap-2 cursor-pointer transition-all duration-200"
            onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} onClick={toggleCategories}>

            <p className="text-lg font-monts-medium">Categories</p>

            <ChevronDown 
                size={20} 
                strokeWidth={2.5}
                color={hovering || showCategories? '#ff8904' : '#2b2726'}
                className={`transition-all duration-200 ${showCategories? 'rotate-180':''}`}
            />

            <motion.div className="absolute -bottom-1 z-10 bg-orange-400 h-[2px] w-full" 
                initial={{width:'0%'}}
                animate={hovering || showCategories? {width:'96%'}:{}}
                transition={{duration:0.25, ease:'easeInOut'}}
            />



        </div>

        { showCategories && <CategoriesDropdown/> }

    </div>
  )
}

export default NavOption;