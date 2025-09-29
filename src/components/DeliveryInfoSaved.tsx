import { motion } from "framer-motion";


const DeliveryInfoSaved = () => {
  return (
    <motion.div className="w-full bg-white rounded-sm shadow-sm p-4 border border-gray-300 flex flex-col gap-4"
        initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.3, delay:0.1, ease:'easeInOut'}}>

        <div className="w-full flex justify-between items-center gap-2 border-b border-gray-300 pb-2 mb-2">
            <p className="text-black-text font-monts-semi-bold">
                Delivery Information
            </p>
        </div>

        <div className="w-full flex flex-col gap-1">
            <p className="text-black-text text-xs font-monts-medium mb-1">
                John Wick
            </p>
            <p className="text-black-text/70 text-xs font-monts-medium">
                4 Wawuna street, Rumuigbo, PH.
            </p>
            <p className="text-black-text/70 text-xs font-monts-medium">
                johnwick@continental.com
            </p>
            <p className="text-black-text/70 text-xs font-monts-medium">
                +234-7031234567
            </p>
        </div>
    </motion.div>
  )
}

export default DeliveryInfoSaved;