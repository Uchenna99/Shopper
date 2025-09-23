import { useState } from "react";
import CartItem from "../components/CartItem";
import RemoveCartItem from "../components/confirmations/RemoveCartItem";
import Coupon from "../components/Coupon";
import NavigationBar from "../components/navbar/NavigationBar";
import CheckBox from "../components/buttons/CheckBox";
import CardsSlide from "../components/CardsSlide";
import products from "../assets/Data/Items.json";
import Footer from "../components/Footer";


const ShoppingCart = () => {
    const [confirmRemove, setConfirmRemove] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState<'card' | 'delivery' | 'paystack'>('paystack');
  return (
    <div className="w-full flex flex-col items-center relative">
        <NavigationBar/>

        <div className="w-[1300px] max-w-full flex flex-col md:flex-row py-10 px-3 gap-5">

            <div className="w-full md:w-2/3 flex">

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

                <div className="w-full flex flex-col py-5 gap-3 text-black-text">
                    <div className="w-full flex justify-between items-center gap-2">
                        <p className="text-sm font-monts-semi-bold">Sub Total</p>
                        <p className="text-sm font-monts-medium">
                            $200.00
                        </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-2">
                        <p className="text-sm font-monts-semi-bold">Coupon Discount</p>
                        <p className="text-sm font-monts-medium">
                            - $0.00
                        </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-2">
                        <p className="text-sm font-monts-semi-bold">Shipping</p>
                        <p className="text-sm font-monts-medium">
                            $0.00
                        </p>
                    </div>

                    <div className="w-full flex justify-between items-center gap-2 my-2">
                        <p className="text-sm font-monts-semi-bold">Total</p>
                        <p className="text-sm font-monts-medium">
                            = $200.00
                        </p>
                    </div>

                    <button className="w-full border-none outline-none bg-orange-400 rounded-4xl py-2 text-white font-monts-medium
                        cursor-pointer hover:bg-orange-500 active:bg-orange-500 active:scale-95 transition-all duration-200">
                        Pay $200.00
                    </button>
                </div>
            </div>

        </div>

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
            title="Similiar Items You Might Like"
            customClass="slide1"
            products={products}
        />

        <Footer/>
    </div>
  )
}

export default ShoppingCart;