import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StarRatingDisplay } from "./StarRatingDisplay";
import ProductCardButton from "./buttons/ProductCardButton";
import { splitPrice } from "../utils/UtilityFunctions";

interface Props {
    name: string;
    description?: string;
    price: number;
    rating: number;
    category?: 'men' | 'women' | 'children' | 'bags' | 'accessories' | 'shoes';
    image: string;
}

const ProductCard2 = ({ name, price, rating, image }:Props) => {
    const { ref, inView } = useInView({threshold:0.5, triggerOnce: true});
    const { main, decimal } = splitPrice(price);

  return (
    <motion.div className="w-full flex flex-col items-center gap-3 p-1"
      initial={{opacity:0, scale:0.8}} animate={inView? {opacity:1, scale:1}:{}} transition={{duration:0.3, ease:'easeInOut'}}
      ref={ref}>

        <div className="w-full aspect-[2/2.1] bg-orange-50 rounded-xl overflow-hidden cursor-pointer 
            relative flex"
            >
            <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 hover:scale-105"
                style={{backgroundImage:`url(${image})`}}>
            </div>
        
        </div>

        <div className="w-full flex flex-col gap-2">

            <p className="text-black-text sm:text-lg font-monts-semi-bold truncate">
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

            <ProductCardButton
                onAdd={()=>{}}
            />

        </div>
      
    </motion.div>
  )
}

export default ProductCard2;