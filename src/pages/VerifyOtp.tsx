import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { CircleCheck, LockKeyhole } from "lucide-react";
import { toast } from "sonner";
import type { AxiosResponse } from "axios";
import { fetchWithRetry } from "../utils/FetchWithRetry";
import { HOST } from "../utils/Host";


const VerifyOtp = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resending, setResending] = useState(false);
  const [seconds, setSeconds] = useState(40);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email: string = location.state?.email || "";

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [seconds]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      setError("Please enter complete OTP");
      return;
    }

    setIsLoading(true);
    setError("");

    const payload = { email: email, otp: otpCode };
    
    try {
      const response: AxiosResponse = await fetchWithRetry(
        {
          method: "POST",
          url: `${HOST}/api/v1/auth/verify-otp`,
          data: payload,
        },
        3, // retries
        2000 // delay
      );
      setIsVerified(true);
      toast.success(response.data.message || "OTP is verified");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Network error, please try again");
    } finally {
      setIsLoading(false);
    };
    
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    navigate("/login", { state: { passwordReset: true } });
    toast.success("Your new password has been saved");
  };

  const handleResend = async(e: React.FormEvent)=>{
    e.preventDefault();
    setResending(true);
    const payload = { email: email };
    try {
      const response: AxiosResponse = await fetchWithRetry(
        {
          method: "POST",
          url: `${HOST}/api/v1/auth/forgot-password`,
          data: payload,
        },
        3, // retries
        2000 // delay
      );
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Network error, please try again");
    } finally {
      setResending(false);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl py-8 px-5 xs:px-8 border border-gray-300 text-black-text font-monts-medium"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className={`text-2xl font-monster font-monts-bold transition-all duration-300 mb-2`}>
                <span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span>
            </h1>
            <p className="text-black-text text-sm">
              {isVerified ? "Create new password" : "Enter verification code"}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isVerified ? (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
                    className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                    <LockKeyhole size={24} color="#ffff"/>
                </motion.div>

                {email && (
                  <p className="text-sm text-black-text/70 font-monts-regular text-center mb-6">
                    Code sent to <span className="text-black-text font-monts-medium">{email}</span>
                  </p>
                )}

                <div className="flex gap-2 justify-center mb-6">
                  {otp.map((digit, index) => (
                    <motion.input
                      key={index}
                      ref={(el) => {inputRefs.current[index] = el}}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="w-9 h-12 xs:w-12 xs:h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg 
                      focus:border-orange-400 focus:ring-2 focus:ring-orange-400 outline-none transition-all duration-200"
                    />
                  ))}
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm text-center mb-4"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                    onClick={handleVerifyOtp}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 disabled:pointer-events-none cursor-pointer
                    disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm h-11 px-5 w-full relative overflow-hidden"
                    >
                    {isLoading ? (
                        <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                    ) : (
                        'Verify OTP'
                    )}
                </motion.button>

                <p className="text-center text-sm mt-4">
                  Didn't receive code?{" "}
                  <button className={`text-orange-400 hover:text-orange-500 active:text-orange-500 cursor-pointer
                    ${resending || !canResend? 'pointer-events-none':''}`}
                    onClick={handleResend}>
                    {
                      resending? 'Resending...' : !canResend? `Resend in ${seconds}s` : 'Resend' 
                    }
                  </button>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="password"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleResetPassword}
                className="space-y-6"
              >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3, stiffness: 200 }}
                    className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                    <CircleCheck size={24} color="#ffff"/>
                </motion.div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter new password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Confirm new password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 duration-200"
                  />
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 disabled:pointer-events-none cursor-pointer
                    disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm h-11 px-5 w-full relative overflow-hidden"
                    >
                    {isLoading ? (
                        <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                    ) : (
                        'Create New Password'
                    )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center"
          >
            <Link
              to="/forgot-password"
              className="text-sm text-orange-400 hover:text-orange-500 active:text-orange-500 transition-all duration-200"
            >
              ← Back
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerifyOtp;