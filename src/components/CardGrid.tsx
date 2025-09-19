import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "../assets/Data/Items.json";
import ProductCard from "./ProductCard";


const CardGrid = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
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
                    />
                ))
            }
        </div>


        <div className="flex items-center gap-3 text-black-text">
            <div className="w-8 h-8 rounded-full flex items-center justify-center ring-1 cursor-pointer hover:text-orange-400 transition-all
                duration-200">
                <ChevronLeft size={18}/>
            </div>

            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-orange-400 hover:text-white
                cursor-pointer transition-all duration-200">
                <p className="text-sm font-monts-regular">1</p>
            </div>

            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-orange-400 hover:text-white
                cursor-pointer transition-all duration-200">
                <p className="text-sm font-monts-regular">2</p>
            </div>

            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-orange-400 hover:text-white
                cursor-pointer transition-all duration-200">
                <p className="text-sm font-monts-regular">3</p>
            </div>
            
            <div className="w-8 h-8 rounded-full flex items-center justify-center ring-1 cursor-pointer hover:text-orange-400 transition-all
                duration-200">
                <ChevronRight size={18}/>
            </div>
        </div>
    </div>
  )
}

export default CardGrid;