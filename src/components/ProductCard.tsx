import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image1 from "../assets/YV9oZmxpcA==.png"
import { StarRatingDisplay } from "./StarRatingDisplay";
import ProductCardButton from "./buttons/ProductCardButton";


const ProductCard = () => {
    const { ref, inView } = useInView({threshold:0.5, triggerOnce: true});

  return (
    <motion.div className="w-full flex flex-col items-center gap-3 p-1"
      initial={{opacity:0, y:30}} animate={inView? {opacity:1, y:0}:{}} transition={{duration:0.3, ease:'easeInOut'}}
      ref={ref}>

      <div className="w-full aspect-[2/2.1] bg-orange-50 rounded-xl overflow-hidden cursor-pointer transition-all duration-200
          relative flex justify-center items-end">
      
          <img src={image1} alt="" 
              className="h-full w-auto max-w-none hover:scale-110 transition-all duration-300"
          />

      </div>

      <div className="w-full flex flex-col gap-2">

        <div className="w-full flex items-center justify-between">

            <p className="text-black-text text-lg font-monts-semi-bold">
                Item name
            </p>

            <div className="flex">
                <p className="text-black-text text-lg text-nowrap font-monts-semi-bold flex gap-[1px]">
                    <span className="text-sm">$</span>
                    500
                    <span className="text-xs">.00</span>
                </p>
            </div>

        </div>

        <div className="flex flex-col gap-2">


            <p className="text-black-text text-xs font-monts-regular">
                Item description
            </p>

            <StarRatingDisplay rating={5} size={17}/>

            <ProductCardButton/>

        </div>


      </div>
      
    </motion.div>
  )
}

export default ProductCard;