import products from "../assets/Data/Items.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CardGrid = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    
  return (
    <div className="w-full flex flex-col items-center gap-5">
        <div className="w-[1300px] max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-1 sm:gap-x-3 gap-y-10 py-10 px-2">
            {
                products.map((item, index)=>(
                    <ProductCard
                        key={index}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                        onCardSelect={()=> navigate(`/${item.categoryName}/productdetails`, {state: {item}})}
                    />
                ))
            }
        </div>


        <Pagination 
            currentPage={currentPage} 
            totalPages={1} 
            onPageChange={(page)=> setCurrentPage(page)}
        />
    </div>
  )
}

export default CardGrid;