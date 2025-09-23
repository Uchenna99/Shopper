import { Trash2, X } from "lucide-react";

interface Props {
    onCancel: ()=>void;
    onConfirm: ()=>void;
}

const RemoveCartItem = ({ onCancel, onConfirm }:Props) => {
  return (
    <>
        <div className="w-full h-screen fixed top-0 left-0 bg-black/40"></div>
        
        <div className="fixed top-2/5 left-1/2 -translate-x-1/2 w-[400px] max-w-[calc(100%-24px)] bg-white rounded-md p-5 text-black-text">
            <X size={20} 
                className="absolute right-3 top-5 cursor-pointer hover:text-red-400 active:text-red-400 transition-all duration-200"
                onClick={onCancel}
            />

            <div className="flex items-center justify-center gap-2 mb-3">
                <Trash2 size={18} className="text-red-400"/>
                <p className="font-monts-semi-bold">
                    Remove item
                </p>
            </div>

            <p className="text-black-text/80 text-sm text-center font-monts-medium mb-3">
                Are you sure you want to remove this item from your cart?
            </p>

            <div className="w-full flex items-center"></div>
        </div>
    </>
  )
}

export default RemoveCartItem;