import { useState } from "react";

interface Props {
    title: string;
    amount: number;
    thumbnail: string;
}

const CategoryOption = ({ title, amount, thumbnail }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex items-center gap-2 bg-[#f5f6f6] p-1 rounded-sm cursor-pointer"
        onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)}>

        <div className="w-14 h-14 min-w-14 min-h-14 bg-gray-200 rounded-sm bg-center bg-no-repeat bg-cover"
        style={{backgroundImage:`url(${thumbnail})`}}></div>
        <div className="flex flex-col gap-0">
          <p className={`font-monts-semi-bold ${hovering? 'text-orange-400':'text-black-text'} transition-all duration-200`}>
            {title}
          </p>
          <p className="text-black-text text-sm font-monts-regular">
            {amount} {amount < 2? 'item':'items'} available
          </p>
        </div>

    </div>
  )
}

export default CategoryOption;