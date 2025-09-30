import logo from "../../assets/Icons/online-shopping_3081648.svg";
import NavOption from "./NavOption";
import SearchBar from "./SearchBar";
import NavRightOption from "./NavRightOption";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useScreenWidth } from "../../hooks/WidthQuery";
import NavDropDown from "./NavDropDown";
import { useAppContext } from "../../hooks/AppContext";
import { useScreenHeight } from "../../hooks/HeightQuery";
import { Link, useLocation, useNavigate } from "react-router-dom";


const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const smallHeigth = useScreenHeight(500);
  const { showMenu, setShowMenu, cartItems } = useAppContext();
  const isMobile = useScreenWidth(530);
  const [searching, setSearching] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);


  useEffect(()=>{
    if(isMobile && searching) {
      if(!hideLogo) { setHideLogo(true) }
    }else if(isMobile && !searching) {
      setTimeout(() => {
        setHideLogo(false);
      }, 200);
    }
  },[searching]);

  const startSearch = ()=>{
    if(!searching) { setSearching(true) };
  };


  return (
    <>
        <NavDropDown />

        <div className={`w-full bg-white flex justify-center sticky top-0 z-90 shadow-sm
            ${smallHeigth? 'h-14':'h-14 sm:h-20'}`}>
            <div className={`w-[1300px] max-w-full h-full flex items-center justify-between px-1 sm:px-5 gap-2`}>

                <Link to={'/'} className={`flex items-center gap-3 cursor-pointer hover:scale-110 transition-all duration-250`}>
                  <img src={logo} alt="" className={`w-8 h-8 sm:w-11 sm:h-11 ${hideLogo? 'hidden':''}`} />
                  <h1 className={`text-xl sm:text-2xl font-monster font-monts-bold transition-all duration-300
                    ${hideLogo? 'hidden':''}`}>
                    <span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span>
                  </h1>
                </Link>


                <div className="h-full flex items-center gap-6 text-black-text max-lg:hidden">
                  
                  <NavOption />

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250 text-nowrap">
                    About us
                  </p>

                  <p className="text-lg font-monts-medium cursor-pointer hover:text-orange-400 transition-all duration-250">
                    Support
                  </p>

                </div>




                <div className="h-full flex items-center gap-4">

                  <motion.div className="h-full flex items-center cursor-pointer md:mr-3"
                    initial={{width:40}} animate={searching && isMobile? {width:220}: searching && !isMobile?{width:240}:{}} 
                    transition={{duration:0.3, ease:'easeInOut'}}
                    onClick={startSearch}>

                    <SearchBar searching={searching} close={()=> setSearching(false)}/>

                  </motion.div>

                  <div className={`relative flex md:hidden ml-2`} 
                    onClick={()=> location.pathname.includes('/cart')? null : navigate('/cart')}>
                    <ShoppingCart
                        size={21}
                        strokeWidth={2}
                        className={`transition-all duration-200 z-10`}
                    />
                    <motion.div className={`min-w-4 min-h-4 bg-orange-400 rounded-full absolute -top-3 left-1 grid place-items-center
                            ${cartItems.length === 0? 'hidden':''}`}>
                        <p className="text-white text-xs font-monts-medium">
                            {cartItems.length || 0}
                        </p>
                    </motion.div>
                  </div> 

                  <NavRightOption 
                    title="Account" 
                    whenClicked={()=> navigate('/account')}
                  />

                  <NavRightOption 
                    title="Cart"
                    whenClicked={()=> location.pathname.includes('/cart')? null : navigate('/cart')}
                  />

                  <div className="w-10 h-full lg:hidden flex items-center justify-center">
                    {
                      showMenu?
                      <X
                        size={25}
                        onClick={()=> setShowMenu(false)}
                      />
                      :
                      <Menu
                        size={25}
                        onClick={()=> setShowMenu(true)}
                      />
                    }
                  </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default NavigationBar;