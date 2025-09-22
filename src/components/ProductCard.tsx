import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StarRatingDisplay } from "./StarRatingDisplay";
// import ProductCardButton from "./buttons/ProductCardButton";
import { splitPrice } from "../utils/UtilityFunctions";
// import LikeButton from "./LikeButton";

interface Props {
    name: string;
    description?: string;
    price: number;
    rating: number;
    category?: 'men' | 'women' | 'children' | 'bags' | 'accessories' | 'shoes';
    image: string;
    onCardSelect?: ()=>void;
}

const ProductCard = ({ name, price, rating, image, onCardSelect }:Props) => {
    const { ref, inView } = useInView({threshold:0.5, triggerOnce: true});
    const { main, decimal } = splitPrice(price);

  return (
    <motion.div className="w-full flex flex-col items-center gap-3 p-1 relative cursor-pointer"
      initial={{opacity:0, y:30}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.4, ease:'easeInOut'}}
      ref={ref} onClick={onCardSelect}>

        <div className="w-full aspect-[2/2.1] bg-orange-50 rounded-xl overflow-hidden relative flex">
            <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
                style={{backgroundImage:`url(${image})`}}>
            </div>
        
        </div>

        <div className="w-full flex flex-col gap-2">

            <p className="text-black-text font-monts-semi-bold truncate">
                {name}
            </p>

            <div className="flex">
                <p className="text-black-text text-lg text-nowrap font-monts-semi-bold flex gap-[1px]">
                    <span className="text-sm">$</span>
                    {main}
                    <span className="text-xs">.{decimal}</span>
                </p>
            </div>

            <StarRatingDisplay rating={rating} size={17}/>

            {/* <ProductCardButton
                onAdd={()=>{console.log('Item added')}}
            /> */}

        </div>

        {/* <LikeButton
            initialLiked={false}
            toggle={()=>{}}
        /> */}
      
    </motion.div>
  )
}

export default ProductCard;