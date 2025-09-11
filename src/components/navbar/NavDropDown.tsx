import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
    show: boolean;
}

const NavDropDown = ({ show }:Props) => {
  return (
    <motion.div className="w-full p-10 bg-white flex flex-col items-center gap-5 absolute left-0 z-40 
        font-monts-medium lg:hidden shadow-sm"
        initial={{top:'-110%'}}
        animate={show? {top:90}:{}}>

        <div className="flex items-center gap-1">
            <p className="">Categories</p>
            <ChevronDown 
                size={15} 
                strokeWidth={2.5}
                // color={hovering? '#ff8904' : '#2b2726'}
                className={`mt-1 transition-all duration-200`}
            />
        </div>

        <p className="text-black-text">About us</p>

        <p className="text-black-text">Support</p>

    </motion.div>
  )
}

export default NavDropDown;