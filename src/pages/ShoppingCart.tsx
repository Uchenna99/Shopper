import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Coupon from "../components/Coupon";
import NavigationBar from "../components/navbar/NavigationBar";
import CheckBox from "../components/buttons/CheckBox";
import CardsSlide from "../components/CardsSlide";
import Footer from "../components/Footer";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/AppContext";
import EmptyCart from "../components/EmptyCart";
import CartTotal from "../components/CartTotal";
import CartItemDisplay from "../components/CartItemDisplay";
import DeliveryInfo from "../components/DeliveryInfo";
import DeliveryInfoSaved from "../components/DeliveryInfoSaved";
import { toast } from "sonner";
import { getRandomItems } from "../utils/UtilityFunctions";


const ShoppingCart = () => {
    const navigate = useNavigate();
    const { cartItems, user, localCartItems, allProducts } = useAppContext();
    const [selectedPayment, setSelectedPayment] = useState<'card' | 'delivery' | 'paystack'>('paystack');
    const [subtotal, setSubtotal] = useState(0);
    const [savedAddress, setSavedAddress] = useState(false);
    const slideCards = getRandomItems(allProducts, 12);
    

    useEffect(()=>{
        let sum = 0;
        if(user) {
            cartItems.forEach((cartItem)=> sum = sum + (cartItem.price * cartItem.quantity));
        }else {
            localCartItems.forEach((cartItem)=> sum = sum + (cartItem.price * cartItem.quantity));
        }
        setSubtotal(sum);
    },[cartItems]);

    useEffect(()=>{
        if(user) {
            setSavedAddress(true);
        }else {
            setSavedAddress(false);
        }
    },[cartItems]);



  return (
    <div className="w-full flex flex-col items-center relative">
        <NavigationBar/>

        {
            (cartItems.length >= 1 && user) || (localCartItems.length >= 1 && !user)?
            <div className="w-[1300px] max-w-full flex flex-col md:flex-row py-15 px-3 gap-5 relative">
                <X
                    size={30}
                    className="absolute right-3 top-5 border rounded-full p-1 text-black-text hover:text-red-400
                    transition-all duration-200 cursor-pointer"
                    onClick={()=> navigate(-1)}
                />

                <div className="w-full md:w-2/3 flex flex-col gap-5">

                    <motion.div className="w-full bg-white rounded-sm shadow-sm pt-4 px-4 border border-gray-300"
                        initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                        <div className="flex border-b border-gray-300 pb-2">
                            <p className="text-black-text font-monts-bold">
                                Cart <span className="font-monts-semi-bold">( {cartItems.length} {cartItems.length == 1? 'item':'items'} )</span>
                            </p>
                        </div>

                        {
                            user?
                            cartItems.map((cartItem, index)=>(
                                <CartItemDisplay
                                    key={index}
                                    item={cartItem}
                                />
                            ))
                            :
                            localCartItems.map((cartItem, index)=>(
                                <CartItemDisplay
                                    key={index}
                                    item={cartItem}
                                />
                            ))
                        }

                        <div className="w-full flex justify-between gap-2 items-center py-5">
                            <p className="text-black-text font-monts-semi-bold">Subtotal:</p>
                            <p className="text-black-text font-monts-semi-bold">
                                ${subtotal.toFixed(2)}
                            </p>
                        </div>
                    </motion.div>

                    <CheckBox
                        option="Use saved address?"
                        isSelected={savedAddress}
                        select={()=> user? setSavedAddress(!savedAddress) : toast.warning("Login to use saved address")}
                    />

                    {
                        savedAddress?
                        <DeliveryInfoSaved/>
                        :
                        <DeliveryInfo/>
                    }
                    
                </div>

                
                <div className="w-full md:w-1/3">
                    <motion.div className="w-full bg-white rounded-sm shadow-sm p-4 border border-gray-300"
                        initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} transition={{duration:0.3, ease:'easeInOut'}}>
                        <div className="flex border-b border-gray-300 pb-2">
                            <p className="text-black-text font-monts-semi-bold">
                                Order Summary
                            </p>
                        </div>

                        <div className="w-full flex py-4 border-b border-gray-300">
                            <Coupon/>
                        </div>

                        <div className="flex border-b border-gray-300 pb-2 pt-5">
                            <p className="text-black-text font-monts-semi-bold">
                                Payment Details
                            </p>
                        </div>

                        <div className="w-full flex flex-col py-5 gap-3 border-b border-gray-300">
                            <CheckBox
                                option="Paystack"
                                isSelected={selectedPayment === 'paystack'}
                                select={()=>setSelectedPayment('paystack')}
                            />
                            <CheckBox
                                option="Debit Card"
                                isSelected={selectedPayment === 'card'}
                                select={()=> toast.warning("This option is currently unavailable")}
                            />
                            <CheckBox
                                option="Cash on Delivery"
                                isSelected={selectedPayment === 'delivery'}
                                select={()=> toast.warning("This option is currently unavailable")}
                            />
                        </div>

                        <CartTotal
                            subtotal={subtotal}
                        />
                    </motion.div>
                </div>

            </div>
            :
            <EmptyCart/>
        }

        

        <CardsSlide
            title="More Items You Might Like"
            customClass="slide1"
            products={slideCards}
        />

        <Footer/>
    </div>
  )
}

export default ShoppingCart;