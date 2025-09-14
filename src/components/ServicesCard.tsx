import { useState } from "react";

interface Props {
    title: string;
    text: string;
    image: string;
    tint?: string;
}

const ServicesCard = ({ title, text, image }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full aspect-[2/2.6] bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}>

        <div className="w-full h-2/5 flex flex-col gap-3 p-10 sm:p-5 lg:p-10">
            <h4 className="text-black-text text-xl font-monts-bold">
                {title}
            </h4>
            <p className="text-black-text font-monts-medium">
                {text}
            </p>
        </div>


        <div className="w-full h-3/5 flex overflow-hidden">

            <div className={`w-full h-full flex bg-bottom bg-contain bg-no-repeat transition-all duration-300
            ${hovering? 'scale-110':''}`}
            style={{backgroundImage:`url(${image})`}}></div>

        </div>
    </div>
  )
}

export default ServicesCard;