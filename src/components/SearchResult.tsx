import { motion } from "framer-motion";
import { StarRatingDisplay } from "./StarRatingDisplay";
import { splitPrice } from "../utils/UtilityFunctions";
import { useScreenWidth } from "../hooks/WidthQuery";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { DB_Product } from "../utils/Types";
import { useAppContext } from "../hooks/AppContext";

interface Props {
    result: DB_Product[];
    foundItems: boolean;
}

const SearchResult = ({ result, foundItems }:Props) => {
    const isSmall = useScreenWidth(640);
    const navigate = useNavigate();
    const { setSearching } = useAppContext();

  return (
    <>
        {
            foundItems?
            <motion.div className={`min-w-[450px] bg-white p-4 grid grid-cols-1 shadow-lg z-90 
                ${isSmall? 'min-w-full fixed top-13 left-0' : 'absolute right-0 top-12 rounded-md'}`}
                initial={{opacity:0, y:-10}}
                animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>

                {
                    result.map((item, index)=>(
                        <div className="w-full flex items-center gap-3 justify-between py-2 border-b border-gray-300 text-black-text 
                            last:border-none"
                            key={index}
                            onClick={()=>{
                                navigate(`/${item.categoryName}/productdetails`, {state: {item}});
                                setSearching(false);
                            }}>

                            <div className="min-w-8 min-h-8 rounded-sm bg-gray-100 bg-center bg-cover bg-no-repeat"
                                style={{backgroundImage:`url(${item.images[0]})`}}
                            />

                            <div className="w-[150px] min-w-[100px] sm:w-[220px]">
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
            :
            <motion.div className={`min-w-[450px] bg-white p-5 flex justify-center items-center gap-2 text-black-text 
                shadow-lg z-90 
                ${isSmall? 'min-w-full fixed top-13 left-0' : 'absolute right-0 top-12 rounded-md'}`}
                initial={{opacity:0, y:-10}}
                animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>

                <Search size={15}/>

                <p className="text-sm font-monts-medium">
                    No items found
                </p>
            </motion.div>
        }
    </>
  )
}

export default SearchResult;