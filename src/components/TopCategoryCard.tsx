import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


interface Props {
    link: string;
    title: string;
}

const TopCategoryCard = ({ link, title }:Props) => {
  const [hovering, setHovering] = useState(false);
  const { ref, inView } = useInView({threshold:0.7});
  
  return (
    <motion.div className="w-full flex flex-col items-center gap-3"
      initial={{scale:0.9}} animate={inView? {scale:1}:{}} transition={{duration:0.3, ease:'easeInOut'}}
      ref={ref}>

      <div className="w-full aspect-[2/3] bg-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200
          relative flex justify-center items-end"
          onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
      
          <img src={link} alt="" 
              className={`h-full w-auto max-w-none transition-all duration-300 ${hovering? 'scale-110':''}`}
          />

      </div>

      <p className={`${hovering? 'text-orange-400':'text-black-text'} font-monts-semi-bold transition-all duration-200`}>
        {title}
      </p>
      
    </motion.div>
  )
}

export default TopCategoryCard;