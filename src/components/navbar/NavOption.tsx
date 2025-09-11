import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";


const NavOption = () => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="h-6 flex items-center gap-2 cursor-pointer transition-all duration-200 relative"
        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>

        <p className="text-lg font-monts-medium">Categories</p>

        <ChevronDown 
            size={20} 
            strokeWidth={2.5}
            color={hovering? '#ff8904' : '#2b2726'}
            className={`transition-all duration-200`}
        />

        {
            hovering && 
            <motion.div className="absolute -bottom-1 z-10 bg-orange-400 h-[2px] w-full" 
                initial={{width:'0%'}}
                animate={{width:'96%'}}
                transition={{duration:0.25, ease:'easeInOut'}}
            />
        }

        </div>
  )
}

export default NavOption;