import { ShoppingCart } from "lucide-react";



const EmptyCart = () => {
  return (
    <div className="w-full flex flex-col items-center py-20 px-3 gap-10 text-black-text">
        <ShoppingCart
            size={100}
            className="text-orange-400"
        />

        <h1 className="text-xl font-monts-semi-bold">
            Your cart is empty
        </h1>

        <button className="w-fit py-2 px-5 border-none outline-none rounded-4xl bg-orange-400 text-white font-monts-medium cursor-pointer
            hover:bg-orange-500 active:bg-orange-500 active:scale-95 transition-all duration-200">
            Browse our Categories
        </button>
    </div>
  )
}

export default EmptyCart;