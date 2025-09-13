import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StarRatingDisplay } from "./StarRatingDisplay";
import ProductCardButton from "./buttons/ProductCardButton";
import { splitPrice } from "../utils/SplitPrice";

interface Props {
    name: string;
    description: string;
    price: number;
    rating: number;
    category?: 'men' | 'women' | 'children' | 'bags' | 'accessories' | 'shoes';
    image: string;
}

const ProductCard = ({ name, description, price, rating, image }:Props) => {
    const { ref, inView } = useInView({threshold:0.5, triggerOnce: true});
    const { main, decimal } = splitPrice(price);

  return (
    <motion.div className="w-full flex flex-col items-center gap-3 p-1"
      initial={{opacity:0, y:30}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.3, ease:'easeInOut'}}
      ref={ref}>

        <div className="w-full aspect-[2/2.1] bg-orange-50 rounded-xl overflow-hidden cursor-pointer transition-all duration-200
            relative flex justify-center items-end">
        
            <img src={image} alt="" 
                className="h-full w-auto max-w-none hover:scale-110 transition-all duration-300"
            />

        </div>

        <div className="w-full flex flex-col gap-2">

            <p className="text-black-text sm:text-lg font-monts-semi-bold">
                {name}
            </p>

            <div className="flex">
                <p className="text-black-text text-lg text-nowrap font-monts-semi-bold flex gap-[1px]">
                    <span className="text-sm">$</span>
                    {main}
                    <span className="text-xs">.{decimal}</span>
                </p>
            </div>

            <p className="text-black-text text-xs font-monts-regular">
                {description}
            </p>

            <StarRatingDisplay rating={rating} size={17}/>

            <ProductCardButton/>

        </div>
      
    </motion.div>
  )
}

export default ProductCard;