import { useState } from "react";
import CartItem from "../components/CartItem";
import RemoveCartItem from "../components/confirmations/RemoveCartItem";
import Coupon from "../components/Coupon";
import NavigationBar from "../components/navbar/NavigationBar";



const ShoppingCart = () => {
    const [confirmRemove, setConfirmRemove] = useState(false);
  return (
    <div className="w-full h-screen flex flex-col items-center relative bg-orange-50">
        <NavigationBar/>

        <div className="w-[1300px] max-w-full flex flex-col md:flex-row py-10 px-3 gap-5">

            <div className="w-full md:w-2/3 flex">

                <div className="w-full bg-white rounded-sm shadow-sm pt-4 px-4">
                    <div className="flex border-b border-gray-300 pb-2">
                        <p className="text-lg text-black-text font-monts-bold">
                            Cart <span className="font-monts-semi-bold">( 1 item )</span>
                        </p>
                    </div>

                    <CartItem
                        onRemove={()=> setConfirmRemove(true)}
                    />
                    <CartItem
                        onRemove={()=> setConfirmRemove(true)}
                    />

                    <div className="w-full flex justify-between gap-2 items-center py-5">
                        <p className="text-black-text text-lg font-monts-semi-bold">Subtotal:</p>
                        <p className="text-black-text text-lg font-monts-semi-bold">
                            $200.00
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full md:w-1/3 bg-white rounded-sm shadow-sm p-4">
                <div className="flex border-b border-gray-300 pb-2">
                    <p className="text-lg text-black-text font-monts-semi-bold">
                        Summary
                    </p>
                </div>

                <div className="w-full flex py-4 border-b border-gray-300">
                    <Coupon/>
                </div>

                <div className="flex border-b border-gray-300 pb-2 pt-3">
                    <p className="text-lg text-black-text font-monts-semi-bold">
                        Payment Details
                    </p>
                </div>
            </div>

        </div>

        {
            confirmRemove && 
            <RemoveCartItem
                
            />
        }
    </div>
  )
}

export default ShoppingCart;