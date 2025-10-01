import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings,
  LogOut,
  Trash2
} from 'lucide-react';
import { useAppContext } from '../hooks/AppContext';

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');
  // const navigate = useNavigate();
  const { setIsloggedIn } = useAppContext();

  const handleLogout = () => {
    setIsloggedIn(false);
    localStorage.removeItem('shopper token');
  };

  useEffect(()=>{
    if(activeTab === 'Logout') {
      handleLogout();
    }
  },[activeTab]);

   

  const tabs = [
    { id: 'orders', name: 'Orders', icon: ShoppingBag },
    { id: 'wishlist', name: 'Wishlist', icon: Heart },
    { id: 'settings', name: 'Settings', icon: Settings },
    { id: 'Logout', name: 'Logout', icon: LogOut },
  ];

  const orders = [
    {
      id: '#ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$299.99',
      items: 3
    },
    {
      id: '#ORD-002',
      date: '2024-01-10',
      status: 'Processing',
      total: '$149.99',
      items: 2
    },
    {
      id: '#ORD-003',
      date: '2024-01-05',
      status: 'Shipped',
      total: '$89.99',
      items: 1
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$199.99',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: '$299.99',
      image: '/api/placeholder/100/100'
    },
    {
      id: 3,
      name: 'Laptop Stand',
      price: '$49.99',
      image: '/api/placeholder/100/100'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-orange-100 text-orange-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-orange-400 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-monts-semi-bold text-black-text">John Doe</h1>
                <p className="text-black-text text-sm">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center rounded-md text-xs font-monts-medium transition-all duration-200 
                focus-visible:outline-none focus-visible:ring focus-visible:ring-orange-400  
                bg-gray-100 text-black-text hover:bg-gray-200 border border-gray-300 h-9 px-3"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-gray-300 bg-white text-black-text shadow-sm p-5">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-md transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-orange-400 text-white'
                          : 'text-black-text/70 hover:text-black-text hover:bg-gray-100 last:hover:text-red-500'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mr-3" />
                      {tab.name}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </div>


          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'orders' && (
                <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-5">
                    <h2 className="text-lg font-monts-semi-bold">Order History</h2>
                    <p className="text-sm">Track and manage your orders</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="space-y-4">
                      {orders.map((order, index) => (
                        <motion.div
                          key={order.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-sm font-monts-semi-bold">{order.id}</h3>
                              <p className="text-xs text-black-text/70">
                                {order.date} • {order.items} items
                              </p>
                            </div>
                            <div className="text-right">
                              <div className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </div>
                              <p className="font-monts-semi-bold mt-1">
                                {order.total}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div className="rounded-lg border border-gray-300 bg-white shadow-sm font-monts-medium">
                  <div className="flex flex-col space-y-1.5 p-5">
                    <h2 className="text-lg font-monts-semi-bold">Wishlist</h2>
                    <p className="text-sm">Items you want to buy later</p>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlistItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="border border-gray-300 rounded-lg p-3 xs:p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 xs:h-16 xs:w-16 bg-gray-100 rounded-md flex-shrink-0"></div>
                            <div className="flex-1">
                              <h3 className="text-sm">{item.name}</h3>
                              <p className="font-monts-semi-bold text-orange-400">{item.price}</p>
                            </div>
                            <div className="flex flex-col space-y-2 items-end">
                              <button className="inline-flex items-center justify-center rounded-4xl text-xs font-medium transition-all 
                                duration-200 text-orange-400 hover:bg-orange-400 shadow-sm active:scale-[0.98] h-7 px-3
                                border border-orange-400 hover:text-white cursor-pointer">
                                Add to Cart
                              </button>
                              <Trash2 size={18} className='text-red-400 hover:text-red-500 cursor-pointer'/>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h2 className="text-lg font-monts-semi-bold">Profile Information</h2>
                      <p className="text-sm">Update your account details</p>
                    </div>
                    <div className="p-6 pt-0">
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              defaultValue="John"
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                          <div>
                            <label className="block text-sm mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              defaultValue="Doe"
                              className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            defaultValue="john.doe@example.com"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            defaultValue="+1 (555) 123-4567"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <button 
                          onClick={(e)=>{e.preventDefault()}}
                          className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm active:scale-[0.98] h-10 px-4">
                          Save Changes
                        </button>
                      </form>
                    </div>
                  </div>


                  <div className="rounded-lg border border-gray-300 bg-white text-black-text font-monts-medium shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h2 className="text-lg font-monts-semi-bold">Change Password</h2>
                      <p className="text-sm">Update your password</p>
                    </div>
                    <div className="p-6 pt-0">
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm mb-2">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-all focus:ring-2 focus:ring-orange-400 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                        <button 
                          onClick={(e)=>{e.preventDefault()}}
                          className="inline-flex items-center justify-center rounded-4xl text-sm font-medium transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50 bg-orange-400 text-white hover:bg-orange-500 shadow-sm active:scale-[0.98] h-10 px-4">
                          Update Password
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;