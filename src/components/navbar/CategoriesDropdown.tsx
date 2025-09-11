import {  useState } from "react";
import { useAppContext } from "../../hooks/AppContext";


const CategoriesDropdown = () => {
  const {  } = useAppContext();
  const [hovering, setHovering] = useState(false);


  return (
    <div className="w-[600px] bg-white p-10 shadow-sm rounded-md absolute top-7
      grid grid-cols-1 sm:grid-cols-2"
      >
        
      <div className="flex items-center gap-2 bg-[#f5f6f6] p-1 rounded-sm cursor-pointer"
        onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <div className="w-14 h-14 min-w-14 min-h-14 bg-gray-200 rounded-sm"></div>
        <div className="flex flex-col gap-0">
          <p className={`font-monts-semi-bold ${hovering? 'text-orange-400':'text-black-text'} transition-all duration-200`}>
            Men's Clothing
          </p>
          <p className="text-black-text text-sm font-monts-regular">
            20 items available
          </p>
        </div>

      </div>

    </div>
  )
}

export default CategoriesDropdown;