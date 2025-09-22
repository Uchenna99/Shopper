import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";



const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const handleMinus = ()=>{
        if(quantity !== 1) { setQuantity(quantity - 1) }
    };

    const handlePlus = ()=>{
        setQuantity(quantity + 1);
    };

  return (
    <div className="w-full flex justify-between py-4">

        <div className="flex flex-col gap-3">

            <div className="flex items-center gap-5">

                <div className="w-20 aspect-square rounded-sm bg-gray-100"></div>

                <div className="flex flex-col gap-1">
                    <h4 className="text-lg text-black-text font-semibold leading-normal">
                        Item Name
                    </h4>
                    <p className="text-black-text text-sm font-monts-medium">
                        Color: black
                    </p>
                    <p className="text-black-text text-sm font-monts-medium">
                        Size: XXL
                    </p>
                </div>

            </div>

            <Trash2 size={22} className="text-red-400 cursor-pointer hover:text-red-500"/>
        </div>


        <div className="flex flex-col items-end justify-center gap-3">
            <p className="text-black-text text-lg font-monts-semi-bold">
                $100.00
            </p>

            <div className="flex items-center gap-4">
                <p className="text-black-text text-xs font-monts-medium">Quantity :</p>

                <div className="flex items-center gap-4 text-black-text">
                    <div className="w-6 h-6 rounded-full border border-gray-300 grid place-items-center cursor-pointer 
                        text-red-400" onClick={handleMinus}>
                        <Minus 
                            size={14}
                            className="transition-all duration-200"
                        />
                    </div>

                    <p className="text-black-text text-sm font-monts-medium">{quantity}</p>

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

export default CartItem;