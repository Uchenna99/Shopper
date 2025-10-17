import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StarRatingDisplay } from "./StarRatingDisplay";
// import ProductCardButton from "./buttons/ProductCardButton";
import { splitPrice } from "../utils/UtilityFunctions";
import LikeButton from "./LikeButton";
import type { DB_Product } from "../utils/Types";
import { useAppContext } from "../hooks/AppContext";

interface Props {
    item: DB_Product;
    onCardSelect?: ()=>void;
}

const ProductCard = ({ onCardSelect, item }:Props) => {
    const { user } = useAppContext();
    const { ref, inView } = useInView({threshold:0.4, triggerOnce: true});
    const { main, decimal } = splitPrice(item.price);

  return (
    <motion.div className="w-full flex relative cursor-pointer"
        initial={{opacity:0, y:30}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.4, ease:'easeInOut'}}
        ref={ref} >

        <div className="w-full flex flex-col items-center gap-3 p-1" onClick={onCardSelect}>
            <div className="w-full aspect-[2/2.1] bg-orange-50 rounded-xl overflow-hidden flex">
                <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
                    style={{backgroundImage:`url(${item.images[0]})`}}>
                </div>
            
            </div>

            <div className="w-full flex flex-col gap-2">

                <p className="text-black-text font-monts-semi-bold truncate">
                    {item.name}
                </p>

                <div className="flex">
                    <p className="text-black-text text-lg text-nowrap font-monts-semi-bold flex gap-[1px]">
                        <span className="text-sm">$</span>
                        {main}
                        <span className="text-xs">.{decimal}</span>
                    </p>
                </div>

                <StarRatingDisplay rating={item.rating} size={17}/>

                {/* <ProductCardButton
                    onAdd={()=>{console.log('Item added')}}
                /> */}

            </div>

        </div>

        {
            user &&
            <LikeButton
                id={item.id}
            />
        }
      
    </motion.div>
  )
}

export default ProductCard;