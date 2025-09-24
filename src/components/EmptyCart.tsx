import { ShoppingCart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";



const EmptyCart = () => {
    const navigate = useNavigate();

  return (
    <div className="w-[1300px] max-w-full flex flex-col items-center py-20 px-3 gap-10 text-black-text relative">
        <X
            size={30}
            className="absolute right-3 top-5 border rounded-full p-1 text-black-text hover:text-red-400
            transition-all duration-200 cursor-pointer"
            onClick={()=> navigate(-1)}
        />
        
        <ShoppingCart
            size={100}
            className="text-orange-400"
        />

        <h1 className="text-lg sm:text-xl font-monts-semi-bold">
            Your cart is empty
        </h1>

        <button className="w-fit py-2 px-5 border-none outline-none rounded-4xl bg-orange-400 text-white font-monts-medium cursor-pointer
            hover:bg-orange-500 active:bg-orange-500 active:scale-95 transition-all duration-200"
            onClick={()=>navigate('/', {state: {scrollTo:500}})}>
            Browse our Categories
        </button>
    </div>
  )
}

export default EmptyCart;