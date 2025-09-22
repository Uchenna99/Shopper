import CartItem from "../components/CartItem";
import NavigationBar from "../components/navbar/NavigationBar";



const ShoppingCart = () => {
  return (
    <div className="w-full flex flex-col items-center relative bg-orange-50">
        <NavigationBar/>

        <div className="w-[1300px] flex py-10">

            <div className="w-2/3 flex">

                <div className="w-full bg-white rounded-sm shadow-sm pt-4 px-4">
                    <div className="flex border-b border-gray-300 pb-2">
                        <p className="text-lg text-black-text font-monts-bold">
                            Cart <span className="font-monts-medium">( 1 item )</span>
                        </p>
                    </div>

                    <CartItem/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ShoppingCart;