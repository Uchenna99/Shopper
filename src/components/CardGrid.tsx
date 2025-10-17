import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import Pagination from "./Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { DB_Product } from "../utils/Types";

interface Props {
    products: DB_Product[];
}

const CardGrid = ({ products }: Props) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    
    
  return (
    <div className="w-full flex flex-col items-center gap-5">
        <motion.div className="w-[1300px] max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-1 sm:gap-x-3 gap-y-10 py-10 px-2"
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.3, delay:0.3, ease:'easeInOut'}}>
            {   products &&
                products.map((item, index)=>(
                    <ProductCard
                        key={index}
                        name={item.name}
                        image={item.images[0]}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                        onCardSelect={()=> navigate(`/${item.categoryName}/productdetails`, {state: {item}})}
                    />
                ))
            }
        </motion.div>


        <Pagination 
            currentPage={currentPage} 
            totalPages={1} 
            onPageChange={(page)=> setCurrentPage(page)}
        />
    </div>
  )
}

export default CardGrid;