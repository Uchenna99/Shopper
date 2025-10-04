import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { HOST } from "../utils/Host";
import { toast } from "sonner";
import { useAppContext } from "../hooks/AppContext";

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const reference = params.get("reference");
  const { setPaymentSuccess } = useAppContext();
  const [verifying, setVerifying] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setTimeout(() => {
          setMessage('Verification failed!');
          setVerifying(false);
        }, 1000);
        return;
      };
      try {
        const res = await axios.get(`${HOST}/api/paystack/verify/${reference}`);
        console.log("Verification result:", res.data);
        setPaymentSuccess(true);
      } catch {
        setMessage('Verification failed!');
        toast.error("Verification failed!");
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [reference]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {
        verifying?
        <h2 className="font-monts-semi-bold text-lg">Verifying Payment Status...</h2>
        :
        <h2 className={`font-monts-semi-bold text-lg ${!reference && 'text-red-400'}`}>{message}</h2>
      }

    </div>
  );
};

export default PaymentSuccess;
