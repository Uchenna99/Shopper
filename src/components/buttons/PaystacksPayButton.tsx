import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../utils/Host";
import { toast } from "sonner";
import { fetchWithRetry } from "../../utils/FetchWithRetry";
import { useAppContext } from "../../hooks/AppContext";
import type { DB_Order } from "../../utils/Types";

interface PayButtonProps {
  email: string;
  amount: number; // in Naira
}

const PaystackPayButton: React.FC<PayButtonProps> = ({ email, amount }) => {
  const [loading, setLoading] = useState(false);
  const { user, setUser, saveUser } = useAppContext();


  const handlePay = async () => {
    if(email === '') {
        toast.warning('Enter your email');
        return;
    }
    try {
      setLoading(true);
      
      // 1️⃣ Initialize payment on backend
      const res = await axios.post(`${HOST}/api/v1/paystack/init`, { email, amount });
      const { authorization_url, reference } = res.data;

      if(user) {
        //  Create new order in db
        const payload = {cartId: user.cart.id, reference: reference}
        await fetchWithRetry({
            method: "POST",
            url: `${HOST}/api/v1/order/new-order`,
            data: payload,
          },
          3, 2000 // retry and delay
        )
        .then((response)=>{
          setUser((prev)=>{
            if(!prev){return prev}
            return { ...prev, orders: [ ...prev.orders, response.data as DB_Order ] }
          });
          saveUser(user);
        })
        .catch(()=>{
          toast.error('Order failed, please try again');
        })
        .finally(()=>{
          // 2️⃣ Redirect user to Paystack payment page
          window.location.href = authorization_url;
        })

      }else{
        // 2️⃣ Redirect user to Paystack payment page
        window.location.href = authorization_url;
      }
    } catch (error) {
      toast.error("Unable to initialize payment");
    } finally {
      setLoading(false);
    }
  };

  loading && toast.loading('Redirecting to paystack');

  return (
    <button
      onClick={handlePay}
      disabled={loading}
      className="w-full border-none outline-none bg-orange-400 rounded-4xl py-2 text-white font-monts-medium
        cursor-pointer hover:bg-orange-500 active:bg-orange-500 active:scale-95 transition-all duration-200
        disabled:pointer-events-none"
    >
      {loading ? "Processing..." : "Pay ₦" + amount.toLocaleString()}
    </button>
  );
};

export default PaystackPayButton;
