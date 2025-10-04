import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti_img from "../../assets/confetti_2.png";
import mark from "../../assets/success_mark.png";
import { useEffect } from "react";
import { fireConfettiFromElement } from "../../utils/Confetti";
import { useAppContext } from "../../hooks/AppContext";


const PaymentSuccessful = () => {
    const navigate = useNavigate();
    const { setPaymentSuccess } = useAppContext();

    useEffect(()=>{
        setTimeout(() => {
            fireConfettiFromElement('spray');
        }, 400);
    },[]);

  return (
    <>
        <div className="w-full h-screen fixed top-0 left-0 z-90 bg-black/40" />
        
        <motion.div className="fixed top-1/5 left-1/2 -translate-x-1/2 w-[360px] max-w-[calc(100%-24px)] bg-white rounded-xl
            z-100 overflow-hidden bg-gradient-to-tr from-white to-blue-100"
            initial={{scale:0.7, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.3, delay:0.2}}>

            <div className="w-full h-[230px] flex items-center justify-center animate-gradient-x
                ">
                <img src={confetti_img} alt="" 
                    className="w-[200px]"
                />
                <img src={mark} alt=""
                    className="w-[60px] absolute"
                />
            </div>

            <div className="w-full px-4 py-10 flex flex-col items-center gap-5">
                <p className="text-black-text font-monts-semi-bold text-center" id="spray">
                    Your order has been <br /> processed
                </p>

                <button className="w-fit px-4 py-2 bg-orange-400 text-white text-sm rounded-3xl cursor-pointer hover:bg-orange-500
                    transition-all duration-200"
                    onClick={()=>{
                        navigate('/', {state: {scrollTo:520}});
                        setPaymentSuccess(false);
                    }}>
                    Continue Shopping
                </button>
            </div>
        </motion.div> 
    </>
  )
}

export default PaymentSuccessful;