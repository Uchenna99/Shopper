import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAppContext } from "../../hooks/AppContext";


const NavDropDown = () => {
  const { showMenu, setShowMenu } = useAppContext();
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
  }, [dropdownRef]);

  return (
    <motion.div className="w-full p-10 bg-white flex flex-col items-center gap-5 absolute left-0 z-40 
        font-monts-medium lg:hidden shadow-sm"
        initial={{top:'-110%'}}
        animate={showMenu? {top:90}:{}}
        ref={dropdownRef}>

        <div className="flex items-center gap-1">
            <p className="">Categories</p>
            <ChevronDown 
                size={15} 
                strokeWidth={2.5}
                // color={hovering? '#ff8904' : '#2b2726'}
                className={`mt-1 transition-all duration-200`}
            />
        </div>

        <p className="text-black-text">About us</p>

        <p className="text-black-text">Support</p>

    </motion.div>
  )
}

export default NavDropDown;