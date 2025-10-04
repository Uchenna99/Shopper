import React, { useState } from "react";
import axios from "axios";
import { HOST } from "../../utils/Host";
import { toast } from "sonner";

interface PayButtonProps {
  email: string;
  amount: number; // in Naira
}

const PaystackPayButton: React.FC<PayButtonProps> = ({ email, amount }) => {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if(email === '') {
        toast.warning('Enter your email');
        return;
    }
    try {
      setLoading(true);
      // 1️⃣ Initialize payment on backend
      const res = await axios.post(`${HOST}/api/v1/paystack/init`, { email, amount });
      const { authorization_url } = res.data;
      toast.loading('Redirecting to paystack');

      // 2️⃣ Redirect user to Paystack payment page
      window.location.href = authorization_url;
    } catch (error) {
      console.error(error);
      alert("Unable to initialize payment");
    } finally {
      setLoading(false);
    }
  };

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
