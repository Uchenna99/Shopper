import { useRef } from "react";
import HeroButton from "../buttons/HeroButton";
import { motion, useInView } from "framer-motion";



const CashBack = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref1, {once: true, amount:0.5});

  return (
    <div className="w-full h-[300px] md:h-[400px] flex justify-center bg-orange-100 overflow-hidden">
        <div className="w-[1300px] flex items-center md:gap-10 relative" ref={ref1}>

            <motion.div className="flex flex-col gap-5 bg-white/50 rounded-2xl max-xl:rounded-tl-none max-xl:rounded-bl-none p-5  z-30"
                initial={{opacity:0, x:'-110%'}}
                animate={inView? {opacity:1, x:0}:{}}
                transition={{duration:0.5, ease:'easeInOut'}}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-black-text font-merienda-bold leading-normal">
                    Get 5% Cash Back
                </h1>
                <p className="text-black-text font-monts-medium">
                    for orders above <span className="font-monts-semi-bold text-orange-500">$1000</span>
                </p>

                <HeroButton title="Learn More"/>
            </motion.div>


            <div className="w-[20px] h-full absolute left-1/3">
                <motion.img src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1757869692/14276-removebg-preview-min_erlvzd.png" alt="happy lady" 
                    className="absolute bottom-0 max-md:w-[400px] max-h-none max-w-none"
                    initial={{y:'100%', opacity:0}}
                    animate={inView? {y:0, opacity:1}:{}}
                    transition={{duration:0.7, delay:0.4, ease:'easeInOut'}}
                />
            </div>

        </div>
    </div>
  )
}

export default CashBack;