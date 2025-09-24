
interface Props {
    subtotal: number;
}

const CartTotal = ({ subtotal }:Props) => {
  return (
    <div className="w-full flex flex-col py-5 gap-3 text-black-text">
        <div className="w-full flex justify-between items-center gap-2">
            <p className="text-sm font-monts-semi-bold">Sub Total</p>
            <p className="text-sm font-monts-medium">
                ${subtotal}
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
                = ${subtotal}
            </p>
        </div>

        <button className="w-full border-none outline-none bg-orange-400 rounded-4xl py-2 text-white font-monts-medium
            cursor-pointer hover:bg-orange-500 active:bg-orange-500 active:scale-95 transition-all duration-200">
            Pay ${subtotal}
        </button>
    </div>
  )
}

export default CartTotal;