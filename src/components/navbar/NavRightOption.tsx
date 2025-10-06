import { ShoppingCart, User2 } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../../hooks/AppContext";
import type { DB_CartItem } from "../../utils/Types";
import { motion } from "framer-motion";

interface Props {
    title: 'Account' | 'Cart';
    whenClicked: ()=>void;
}

const NavRightOption = ({ title, whenClicked }:Props) => {
    const { cartItems, user } = useAppContext();
    const [hovering, setHovering] = useState(false);
    const localCart: DB_CartItem[] = JSON.parse(localStorage.getItem("shopper cart") || "[]");

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
                <motion.div className={`min-w-5 min-h-5 bg-orange-400 rounded-full absolute -top-4 left-0 grid place-items-center
                        ${cartItems.length === 0 && user? 'hidden': localCart.length ===0 && !user? 'hidden':''}`}
                        initial={{opacity:0, scale:0.5}}
                        animate={{opacity:1, scale:1}}
                        transition={{duration:0.2, ease:'easeInOut'}}>
                    <p className="text-white text-xs font-monts-medium">
                        {user? cartItems.length : localCart.length}
                    </p>
                </motion.div>

            </div>
        }

        <p className={`text-sm font-monts-medium ${hovering? 'text-orange-400':''} transition-all duration-250`}>
            {title}
        </p>
    </div>
  )
}

export default NavRightOption;