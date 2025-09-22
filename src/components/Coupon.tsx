


const Coupon = () => {
  return (
    <div className="w-full h-11 flex justify-between gap-3 rounded-4xl p-1 border border-gray-300">

        <input type="text" 
            className="w-full border-none outline-none pl-4 placeholder:text-gray-300 placeholder:text-sm"
            placeholder="Enter Coupon Code"
        />

        <button className="w-fit h-full px-4 text-nowrap outline-none border-none bg-orange-400 text-white text-sm rounded-4xl
            font-monts-medium cursor-pointer hover:bg-orange-500 transition-all duration-200 active:bg-orange-500 active:scale-95">
            Apply Coupon
        </button>
    </div>
  )
}

export default Coupon;