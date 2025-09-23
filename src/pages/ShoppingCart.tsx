import { useState } from "react";
import CartItem from "../components/CartItem";
import RemoveCartItem from "../components/confirmations/RemoveCartItem";
import Coupon from "../components/Coupon";
import NavigationBar from "../components/navbar/NavigationBar";
import CheckBox from "../components/buttons/CheckBox";
import CardsSlide from "../components/CardsSlide";
import products from "../assets/Data/Items.json";
import Footer from "../components/Footer";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/AppContext";
import EmptyCart from "../components/EmptyCart";
import CartTotal from "../components/CartTotal";


const ShoppingCart = () => {
    const navigate = useNavigate();
    const { cartItems } = useAppContext();
    const [confirmRemove, setConfirmRemove] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState<'card' | 'delivery' | 'paystack'>('paystack');

  return (
    <div className="w-full flex flex-col items-center relative">
        <NavigationBar/>

        {
            cartItems.length >= 1?
            <div className="w-[1300px] max-w-full flex flex-col md:flex-row py-15 px-3 gap-5 relative">
                <X
                    size={30}
                    className="absolute right-3 top-5 border rounded-full p-1 text-black-text hover:text-red-400
                    transition-all duration-200 cursor-pointer"
                    onClick={()=> navigate(-1)}
                />

                <div className="w-full md:w-2/3">

                    <div className="w-full bg-white rounded-sm shadow-sm pt-4 px-4 border border-gray-300">
                        <div className="flex border-b border-gray-300 pb-2">
                            <p className="text-lg text-black-text font-monts-bold">
                                Cart <span className="font-monts-semi-bold">( 1 item )</span>
                            </p>
                        </div>

                        <CartItem
                            onRemove={()=> {
                                setConfirmRemove(true);
                                document.body.classList.add("overflow-hidden");
                            }}
                        />
                        <CartItem
                            onRemove={()=> setConfirmRemove(true)}
                        />

                        <div className="w-full flex justify-between gap-2 items-center py-5">
                            <p className="text-black-text font-monts-semi-bold">Subtotal:</p>
                            <p className="text-black-text font-monts-semi-bold">
                                $200.00
                            </p>
                        </div>
                    </div>
                </div>


                <div className="w-full md:w-1/3 bg-white rounded-sm shadow-sm p-4 border border-gray-300">
                    <div className="flex border-b border-gray-300 pb-2">
                        <p className="text-lg text-black-text font-monts-semi-bold">
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
                            select={()=>setSelectedPayment('card')}
                        />
                        <CheckBox
                            option="Cash on Delivery"
                            isSelected={selectedPayment === 'delivery'}
                            select={()=>setSelectedPayment('delivery')}
                        />
                    </div>

                    <CartTotal/>
                </div>

            </div>
            :
            <EmptyCart/>
        }

        {
            confirmRemove && 
            <RemoveCartItem
                onConfirm={()=>{}}
                onCancel={()=> {
                    setConfirmRemove(false);
                    document.body.classList.remove("overflow-hidden");
                }}
            />
        }

        <CardsSlide
            title="More Items You Might Like"
            customClass="slide1"
            products={products}
        />

        <Footer/>
    </div>
  )
}

export default ShoppingCart;