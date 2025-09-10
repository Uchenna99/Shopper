import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  searching: boolean;
}


const SearchBar = ({ searching }:Props) => {

  return (
    <>
        <div className="w-full h-10 rounded-3xl ring-1 ring-black/20 flex items-center justify-center focus-within:ring-orange-300 
          transition-all duration-200 relative">

            <motion.input type="text" 
                className="w-full border-none outline-none pl-5 text-black-text font-monts-medium "
            />

            <Search
              size={18}
              color={'#2b2726'}
              className={`absolute z-90 transition-all duration-200 ${searching? '':''}`}
            />

        </div>
    </>
  )
}

export default SearchBar;