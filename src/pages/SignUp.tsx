import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { useAppContext } from '../hooks/AppContext';
import { toast } from 'sonner';
import { type AxiosResponse } from 'axios';
import { HOST } from '../utils/Host';
import { fetchWithRetry } from '../utils/FetchWithRetry';

const Signup = () => {
  const {  } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      toast.warning('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    const payload = {
      firstName: formData.firstName, lastName: formData.lastName, email: formData.email, password: formData.password
    };

    try {
      const response: AxiosResponse = await fetchWithRetry(
        {
          method: "POST",
          url: `${HOST}/api/v1/auth/signup`,
          data: payload,
        },
        3, // retries
        2000 // delay
      );

      navigate('/login');
      toast.success(response.data.message || "User registered");

    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Network error, please try again");
    } finally {
      setIsLoading(false);
    };

    // axios.post(`${HOST}/api/v1/auth/signup`, payload)
    // .then((response)=>{
    //   console.log(response.data);
    //   navigate('/login');
    //   toast.success('');
    // })
    // .catch((error)=>{
    //   toast.error(error.response.data.message || "Network error")
    // })
    // .finally(()=> setIsLoading(false));

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm py-8 px-5">
          <div className="text-center">
            <h1 className={`text-2xl font-monster font-monts-bold transition-all duration-300 mb-2 cursor-pointer`}
              onClick={()=> navigate('/')}>
                <span className="text-orange-500">SHOP</span><span className="text-orange-300">PER</span>
            </h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-monts-bold text-black-text mb-2"
            >
              Create Account
            </motion.h2>
            <p className="text-black-text/70 text-sm">
              Join us and start your shopping journey
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-2">
                  First Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{duration:0.2}}
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-2">
                  Last Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{duration:0.2}}
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{duration:0.2}}
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{duration:0.2}}
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 pr-10"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{duration:0.2}}
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all 
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 pr-10"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 cursor-pointer transition-all duration-200" />
                  ) : (
                    <Eye className="h-5 w-5 cursor-pointer transition-all duration-200" />
                  )}
                </button>
              </div>
            </div>

            {/* <div className="flex items-center bg-red-300">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{' '}
                <Link to="/terms" className="text-orange-400 hover:text-orange-500">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-orange-400 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </label>
            </div> */}

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
                'Create Account'
              )}
            </motion.button>

            <div className="text-center">
              <span className="text-sm">Already have an account? </span>
              <Link 
                to="/login" 
                className="text-orange-400 hover:text-orange-500 text-sm active:text-orange-500"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;