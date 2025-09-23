import { Trash2, X } from "lucide-react";

interface Props {
    onCancel: ()=>void;
    onConfirm: ()=>void;
}

const RemoveCartItem = ({ onCancel, onConfirm }:Props) => {
  return (
    <>
        <div className="w-full h-screen fixed top-0 left-0 bg-black/40" onClick={onCancel}></div>
        
        <div className="fixed top-2/5 left-1/2 -translate-x-1/2 w-[400px] max-w-[calc(100%-24px)] bg-white rounded-md p-5 text-black-text">
            <X size={20} 
                className="absolute right-3 top-5 cursor-pointer hover:text-red-400 active:text-red-400 transition-all duration-200"
                onClick={onCancel}
            />

                <p className="font-monts-semi-bold text-center mb-3">
                    Remove item
                </p>

            <p className="text-black-text/80 text-sm text-center font-monts-medium mb-3">
                Are you sure you want to remove this item from your cart?
            </p>

            <div className="w-full flex gap-4">
                <button className="flex-1 border-none outline-none cursor-pointer py-1 rounded-sm text-sm text-black-text
                    bg-orange-50 hover:bg-orange-100 active:bg-orange-100 transition-all duration-200"
                    onClick={onCancel}>
                    Cancel
                </button>
                <button className="flex-1 border-none outline-none cursor-pointer py-1 rounded-sm text-sm text-red-400
                    bg-red-50 hover:bg-red-100 active:bg-red-100 flex items-center justify-center gap-2 transition-all duration-200"
                    onClick={onConfirm}>
                    <Trash2 size={14} className="text-red-400"/>
                    Delete
                </button>
            </div>
        </div>
    </>
  )
}

export default RemoveCartItem;