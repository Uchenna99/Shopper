import { useState } from "react";


interface Props {
    link: string;
    title: string;
}

const TopCategoryCard = ({ link, title }:Props) => {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="w-full aspect-[2/3] bg-gray-300 rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all duration-200
          relative flex justify-center items-end"
          onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>
      
          <img src={link} alt="" 
              className="h-full w-auto max-w-none hover:scale-110 transition-all duration-300"
          />

      </div>

      <p className={`${hovering? 'text-orange-400':'text-black-text'} font-monts-semi-bold transition-all duration-200`}>
        {title}
      </p>
    </div>
  )
}

export default TopCategoryCard;