import { motion } from "framer-motion";
import { StarRatingDisplay } from "./StarRatingDisplay";
import { splitPrice } from "../utils/UtilityFunctions";

interface Props {
    result: any[];
}

const SearchResult = ({ result }:Props) => {

  return (
    <motion.div className="w-[500px] max-w-[calc(100%-40px)] bg-white p-4 grid grid-cols-1 rounded-md shadow-sm fixed top-0 z-90 ">

        {
            result.map((item, index)=>(
                <div className="w-full flex items-center gap-3 py-2 border-b border-gray-300 text-black-text 
                    last:border-none"
                    key={index}>

                    <div className="min-w-8 min-h-8 rounded-sm bg-gray-100 bg-center bg-cover bg-no-repeat"
                        style={{backgroundImage:`url(${item.image})`}}
                    />

                    <div className="w-[250px] bg-amber-100">
                        <p className="text-sm font-monts-medium truncate">
                            {item.name}
                        </p>
                    </div>

                    <StarRatingDisplay
                        rating={item.rating}
                        size={14}
                    />

                    <div className="flex">
                        <p className="text-sm text-nowrap font-monts-semi-bold flex gap-[1px]">
                            <span className="text-sm">$</span>
                            {splitPrice(item.price).main}
                            <span className="text-xs">.{splitPrice(item.price).decimal}</span>
                        </p>
                    </div>
                </div>
            ))
        }

    </motion.div>
  )
}

export default SearchResult;