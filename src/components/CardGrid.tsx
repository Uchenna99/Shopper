import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AxiosResponse } from "axios";
import { fetchWithRetry } from "../utils/FetchWithRetry";
import { HOST } from "../utils/Host";
import type { DB_Product } from "../utils/Types";
import { toast } from "sonner";


const CardGrid = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState<DB_Product[] | null>(null);
    

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const response: AxiosResponse = await fetchWithRetry(
                    {
                    method: "GET",
                    url: `${HOST}/api/v1/products/all-products`,
                    },
                    3, // retries
                    2000 // delay
                );
                setProducts(response.data);
            } catch (error: any) {
                toast.error(error?.response?.data?.message || "Network error, please try again");
            } finally {
                // setIsLoading(false);
            };
        };
        fetchProducts();
    },[]);
    
  return (
    <div className="w-full flex flex-col items-center gap-5">
        <div className="w-[1300px] max-w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            gap-1 sm:gap-x-3 gap-y-10 py-10 px-2">
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