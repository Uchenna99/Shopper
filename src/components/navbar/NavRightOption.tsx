import { ShoppingCart, User2 } from "lucide-react";
import { useState } from "react";

interface Props {
    title: 'Account' | 'Cart';
    whenClicked: ()=>void;
}

const NavRightOption = ({ title, whenClicked }:Props) => {
    const [hovering, setHovering] = useState(false);

  return (
    <div className="flex items-center gap-[6px] max-md:hidden cursor-pointer"
        onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)}
        onClick={whenClicked}>
        
        {
            title === 'Account' &&
            <User2
                size={17}
                strokeWidth={2}
                className={`${hovering? 'scale-130' : ''} transition-all duration-200`}
            />
        }
        {
            title === 'Cart' &&
            <ShoppingCart
                size={17}
                strokeWidth={2}
                className={`${hovering? 'scale-130' : ''} transition-all duration-200`}
            />
        }
        <p className={`text-sm font-monts-medium ${hovering? 'text-orange-400':''} transition-all duration-250`}>
            {title}
        </p>
    </div>
  )
}

export default NavRightOption;