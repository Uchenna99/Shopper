import { ShoppingCart, User2 } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";

interface Props {
    title: 'Account' | 'Cart';
    whenClicked: ()=>void;
}

const NavRightOption = ({ title, whenClicked }:Props) => {
    const { cartItems } = useAppContext();
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
            <div className={`relative flex`}>
                <ShoppingCart
                    size={17}
                    strokeWidth={2}
                    className={`${hovering? 'scale-130' : ''} transition-all duration-200 z-10`}
                />
                <div className={`min-w-5 min-h-5 bg-orange-400 rounded-full absolute -top-4 left-0 grid place-items-center
                        ${cartItems.length === 0? 'hidden':''}`}>
                    <p className="text-white text-xs font-monts-medium">
                        {cartItems.length || 0}
                    </p>
                </div>

            </div>
        }

        <p className={`text-sm font-monts-medium ${hovering? 'text-orange-400':''} transition-all duration-250`}>
            {title}
        </p>
    </div>
  )
}

export default NavRightOption;