import { Trash2 } from "lucide-react";
import { useAppContext } from "../hooks/AppContext";
import { useState } from "react";
import RemoveCartItem from "./confirmations/RemoveCartItem";
import type { DB_CartItem } from "../utils/Types";

interface Props {
    item: DB_CartItem;
}

const CartItemDisplay = ({ item }:Props) => {
    const { removeFromCart, user } = useAppContext();
    const [confirmRemove, setConfirmRemove] = useState(false);
    const [deleting, setDeleting] = useState(false);


    const removeItem = ()=>{
        setDeleting(true);

        setTimeout(() => {
            removeFromCart({itemId: item.id, cartId: user?.cart.id || "", itemName: item.name});
            setConfirmRemove(false);
            setDeleting(false);
        }, 800);
    };


  return (
    <div className="w-full flex justify-between gap-2 py-4 border-b border-gray-300">

        <div className="flex flex-col gap-3">

            <div className="flex items-start gap-3 sm:gap-5">

                <div className="min-w-15 sm:min-w-20 aspect-square rounded-sm bg-gray-100 bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage:`url(${item.image})`}}
                />

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
                onClick={()=> setConfirmRemove(true)}
            />
        </div>

        {
            confirmRemove && 
            <RemoveCartItem
                deleting={deleting}
                onConfirm={removeItem}
                onCancel={()=> {
                    setConfirmRemove(false);
                }}
            />
        }


        <div className="min-w-fit flex flex-col items-end gap-3">
            <p className="text-black-text font-monts-semi-bold">
                ${item.price}
            </p>

            <p className="text-black-text text-xs font-monts-medium">Quantity : {item.quantity}</p>

        </div>

    </div>
  )
}

export default CartItemDisplay;