import { useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "./navbar/NavigationBar";
import { StarRatingDisplay } from "./StarRatingDisplay";
import { Minus, NotepadText, Plus, Truck, X } from "lucide-react";
import { useState } from "react";
import ProductCardButton from "./buttons/ProductCardButton";
import CardsSlide from "./CardsSlide";
import LikeButton from "./LikeButton";
import Footer from "./Footer";
import { useAppContext } from "../hooks/AppContext";
import type { DB_CartItem, DB_Product } from "../utils/Types";
import { toast } from "sonner";
import { getRandomItems } from "../utils/UtilityFunctions";


const ProductDetailsPage = () => {
    const location = useLocation();
    const { item } = location.state;
    const product: DB_Product = item;
    const colors: string[] = product.colors;
    const navigate = useNavigate();
    const { addToCart, user, allProducts } = useAppContext();
    const [isAdding, setIsAdding] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const slideCards = getRandomItems(allProducts, 12);
    const itemToSend: DB_CartItem = {
        name: product.name,
        price: product.price,
        rating: product.rating,
        categoryName: product.categoryName,
        color: colors[0] || "",
        image: product.images[0],
        quantity: quantity,
        cartId: user?.cart.id || ""
    }

    const handleMinus = ()=>{
        if(quantity !== 1) { setQuantity(quantity - 1) }
    };

    const handlePlus = ()=>{
        setQuantity(quantity + 1);
    };

    const handleAddToCart = async()=>{
        setIsAdding(true);
        addToCart(itemToSend)
        .then(()=>{
            toast.success("Item added to cart");
        })
        .catch((error)=>{
            toast.error(error?.response?.data?.message || "Network error, please try again");
        }).finally(()=> setIsAdding(false));
    };
    
    
  return (
    <div className="w-full min-h-screen flex flex-col">
        <NavigationBar/>

        <div className="w-full flex justify-center px-3 py-15">
            <div className="w-[1300px] flex flex-col md:flex-row gap-10 relative">
                <X
                    size={30}
                    className="absolute right-3 -top-10 border rounded-full p-1 text-black-text hover:text-red-400
                    transition-all duration-200 cursor-pointer"
                    onClick={()=> navigate(-1)}
                />

                <div className="flex-1 flex flex-col gap-5 sm:px-5">
                    <div className="w-full aspect-[3/2.5] bg-gray-200 rounded-md bg-center bg-cover bg-no-repeat relative" 
                        style={{backgroundImage:`url('${product.images[0]}')`}}>
                        <LikeButton
                            id={product.id}
                        />
                    </div>
                    
                    
                    <div className="w-full flex gap-2">
                        <div className="w-20 aspect-[3/2.5] bg-gray-100 rounded-md bg-center bg-cover bg-no-repeat"
                            style={{backgroundImage:`url('${product.images[0]}')`}}
                        />
                    </div>
                </div>


                <div className="flex-1 flex flex-col sm:px-5">

                    <div className="w-full flex flex-col gap-2 border-b border-gray-300 py-5">
                        <h1 className="text-3xl text-black-text font-monts-bold leading-normal"> {product.name} </h1>

                        <p className="text-black-text text-sm font-monts-regular">{product.description}</p>

                        <StarRatingDisplay
                            rating={product.rating}
                            size={18}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-2 border-b border-gray-300 py-5">
                        <p className="text-black-text text-2xl font-monts-semi-bold">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-black-text text-xs font-monts-medium">No discount applied</p>
                    </div>

                    <div className="w-full flex flex-col gap-2 border-b border-gray-300 py-5">
                        <p className="text-black-text font-monts-medium">Choose a Color</p>
                        <div className="w-full flex gap-3 items-center p-2">
                            {
                                colors.length >= 1?
                                colors.map((color, index)=>(
                                    <div className="w-8 h-8 rounded-full border border-gray-300 p-1 rotate-135" key={index}>
                                        <div className="w-full h-full rounded-full" style={{backgroundColor:color}}></div>
                                    </div>
                                ))
                                :
                                <div className="w-8 h-8 rounded-full border border-gray-300 p-1 relative flex items-center justify-center rotate-135">
                                    <div className="w-full h-full rounded-full bg-gray-300"></div>
                                    <div className="w-[calc(100%+20px)] min-h-[1px] h-[1px] absolute bg-red-400"></div>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 border-b border-gray-300 py-5">
                        <div className="w-full flex items-center gap-7">
                            <div className="flex items-center gap-4 text-black-text">
                                <div className="w-8 h-8 rounded-full border border-gray-300 grid place-items-center cursor-pointer 
                                    hover:text-red-400" onClick={handleMinus}>
                                    <Minus 
                                        size={18}
                                        className="transition-all duration-200"
                                    />
                                </div>

                                <p className="text-black-text font-monts-medium">{quantity}</p>

                                <div className="w-8 h-8 rounded-full border border-gray-300 grid place-items-center cursor-pointer 
                                    hover:text-green-600" onClick={handlePlus}>
                                    <Plus 
                                        size={18}
                                        className="transition-all duration-200"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-black-text text-[10px] font-monts-medium">Only <span className="text-orange-500">12 units</span> left!</p>
                                <p className="text-black-text text-[10px] font-monts-medium">Don't miss out</p>
                            </div>
                        </div>

                        <ProductCardButton
                            adding={isAdding}
                            onAdd={handleAddToCart}
                        />
                    </div>

                    <div className="w-full flex flex-col gap-1 py-5">
                        <div className="w-full flex border border-gray-300 p-4 rounded-sm">
                            <Truck size={16} color="#ff6900"/>
                            <div className="flex flex-col px-3">
                                <p className="text-black-text text-xs font-monts-semi-bold">
                                    Free Delivery
                                </p>
                                <p className="text-black-text text-xs font-monts-medium cursor-pointer hover:underline active:underline">
                                    Check your eligibility for free delivery.
                                </p>
                            </div>
                        </div>

                        <div className="w-full flex border border-gray-300 p-4 rounded-sm">
                            <NotepadText size={16} color="#ff6900"/>
                            <div className="flex flex-col px-3">
                                <p className="text-black-text text-xs font-monts-semi-bold">
                                    Return Policy
                                </p>
                                <p className="text-black-text text-xs font-monts-medium cursor-pointer hover:underline active:underline">
                                    Free 15 days delivery returns.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <CardsSlide
            title="Similar Items You Might Like"
            customClass="slide4"
            products={slideCards}
        />
        <Footer/>
    </div>
  )
}

export default ProductDetailsPage;