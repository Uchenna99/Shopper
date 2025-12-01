import logo from "../assets/Icons/online-shopping_3081648.svg";
import payments from "../assets/Data/PaymentMethods.json";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center p-5 gap-5">
        <div className="w-[1300px] max-w-full py-10 flex flex-col gap-10 border border-r-0 border-l-0 border-gray-200">
        
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-black-text font-merienda-bold">

            <div className="w-fit flex flex-col gap-5">
              <div className="w-full flex flex-col gap-2">
                <div className={`flex items-center gap-3 cursor-pointer transition-all duration-250`}>
                  <img src={logo} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                  <h1 className={`text-lg sm:text-xl font-monster font-monts-bold transition-all duration-300`}>
                    <span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span>
                  </h1>
                </div>
                <p className="text-xs font-monts-regular leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro enim fugit tenetur, doloribus dolores itaque 
                  ullam nam, consequuntur quibusdam natus sit quaerat eum dicta.
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <p className="font-monts-semi-bold">
                  Payment options
                </p>
                <div className="w-full flex flex-wrap gap-2">
                  {
                    payments.map((payment, index)=>(
                      <div className="w-16 aspect-[3/1.9] border border-gray-200 rounded-md bg-center bg-[length:50%] bg-no-repeat"
                        key={index}
                        style={{backgroundImage:`url(${payment.url})`}}
                      />
                    ))
                  }
                </div>
              </div>
            </div>


            <div className="w-full flex sm:justify-center">
              <div className="w-fit flex flex-col gap-1 text-sm">
                <p className="font-monts-semi-bold mb-2 text-lg">
                  About us
                </p>
                <Link to={'/about'} className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  About Shopper
                </Link>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  Careers
                </p>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  News & Blog
                </p>
              </div>
            </div>


            <div className="w-full flex sm:justify-center">
              <div className="w-fit flex flex-col gap-1 text-sm">
                <p className="font-monts-semi-bold mb-2 text-lg">
                  Services
                </p>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  Gift cards
                </p>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  Shipping & Delivery
                </p>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  Order Pickup
                </p>
                <p className="w-fit font-monts-regular transition-all duration-200 cursor-pointer hover:text-orange-400 
                  hover:translate-x-1 active:text-orange-400">
                  Mobile App
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="w-full flex max-sm:flex-col items-center justify-center gap-5 sm:gap-12 text-black-text py-2">
          <p className="text-xs font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-200 text-nowrap">
            Terms of Service
          </p>
          <p className="text-xs font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-200 text-nowrap">
            Privacy & Policy
          </p>
          <p className="text-xs font-monts-medium">
            All Right reserved by Uchenna Agbu.
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;