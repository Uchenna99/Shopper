import logo from "../assets/Icons/online-shopping_3081648.svg";

const NavigationBar = () => {
  return (
    <>
        <div className="w-full h-20 bg-white flex justify-center">
            <div className="w-[1300px] h-full flex items-center">

                <div className=" flex items-center gap-4">
                    <img src={logo} alt="" className="w-12 h-12" />
                    <h1 className="text-3xl font-monster font-monts-bold"><span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span></h1>
                </div>

            </div>
        </div>
    </>
  )
}

export default NavigationBar;