import { Minus, Plus, Trash2 } from "lucide-react";
// import { useState } from "react";
import type { CartItem } from "../utils/Types";
import { useAppContext } from "../hooks/AppContext";

interface Props {
    onRemove: ()=>void;
    item: CartItem;
}

const CartItemDisplay = ({ onRemove, item }:Props) => {
    const { increaseQuantity, decreaseQuantity } = useAppContext();

    const handleMinus = ()=>{
        decreaseQuantity(item);
    };

    const handlePlus = ()=>{
        increaseQuantity(item);
    };

  return (
    <div className="w-full flex justify-between gap-2 py-4 border-b border-gray-300">

        <div className="flex flex-col gap-3">

            <div className="flex items-start gap-3 sm:gap-5">

                <div className="min-w-15 sm:min-w-20 aspect-square rounded-sm bg-gray-100"></div>

                <div className="flex flex-col gap-1">
                    <h4 className="sm:text-lg text-black-text text-wrap font-semibold leading-tight truncate">
                        {item.name}
                    </h4>

                    <p className="text-black-text text-sm font-monts-medium">
                        Color:Nil
                    </p>

                    <p className="text-black-text text-sm font-monts-medium">
                        Size: Nil
                    </p>
                </div>

            </div>

            <Trash2 
                size={22} 
                className="text-red-400 cursor-pointer hover:text-red-500"
                onClick={onRemove}
            />
        </div>


        <div className="min-w-fit flex flex-col items-end gap-3">
            <p className="text-black-text font-monts-semi-bold">
                ${item.price}
            </p>

            <div className="flex flex-col items-end sm:flex-row sm:items-center gap-4">
                <p className="text-black-text text-xs font-monts-medium">Quantity :</p>

                <div className="flex items-center gap-4 text-black-text">
                    <div className="w-6 h-6 rounded-full border border-gray-300 grid place-items-center cursor-pointer 
                        text-red-400" onClick={handleMinus}>
                        <Minus 
                            size={14}
                            className="transition-all duration-200"
                        />
                    </div>

                    <p className="text-black-text text-sm font-monts-medium">{item.quantity}</p>

                    <div className="w-6 h-6 rounded-full border border-gray-300 grid place-items-center cursor-pointer 
                        text-green-600" onClick={handlePlus}>
                        <Plus 
                            size={14}
                            className="transition-all duration-200"
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartItemDisplay;