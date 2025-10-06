  import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
  import type { DB_CartItem, DB_User, DecodedToken } from "../utils/Types";
import { jwtDecode } from "jwt-decode";
import { fetchWithRetry } from "../utils/FetchWithRetry";
import { HOST } from "../utils/Host";
import type { AxiosResponse } from "axios";
import { toast } from "sonner";

  // Define the shape of your context
  interface AppContextType {
    user: DB_User | null;
    loadingSecurePage: boolean;
    setLoadingSecurePage: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<DB_User | null>>;
    restoreUser: (user: DB_User)=>void;
    isloggedIn: boolean;
    setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showCategories: boolean;
    setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
    showDropCategories: boolean;
    setShowDropCategories: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: DB_CartItem[];
    // localCartItems: DB_CartItem[];
    addToCart: (item: Partial<DB_CartItem>)=>void
    addingToCart: boolean;
    removeFromCart: (data: { cartId: string; itemId: string; })=>void;
    clearCart: ()=>void;
    increaseQuantity: (cartItem: DB_CartItem)=>void;
    decreaseQuantity: (item: DB_CartItem)=>void;
    paymentSuccess: boolean;
    setPaymentSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    login: (token: string, user: DB_User) => void;
    logout: () => void;
    nonUserEmail: string;
    setNonUserEmail: React.Dispatch<React.SetStateAction<string>>;
  }

  // Create the context with default undefined
  const AppContext = createContext<AppContextType | undefined>(undefined);

  // Create the provider
  export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [isloggedIn, setIsloggedIn] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showDropCategories, setShowDropCategories] = useState(false);
    const [cartItems, setCartItems] = useState<DB_CartItem[]>([]); 
    const [addingToCart, setAddingToCart] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [user, setUser] = useState<DB_User | null>(null);
    const [loadingSecurePage, setLoadingSecurePage] = useState(true);
    const [nonUserEmail, setNonUserEmail] = useState('');


    const saveToken = (token: string) => localStorage.setItem('shopper token', token);
    const saveUser = (user: DB_User) => localStorage.setItem('shopper user', JSON.stringify(user));
    const removeCredentials = () =>{
      localStorage.removeItem('shopper token');
      localStorage.removeItem('shopper user');
    };
    const getToken = () => localStorage.getItem('shopper token');
    const getUser = () => localStorage.getItem('shopper user');

    const isTokenExpired = (token: string) => {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded.exp * 1000 < Date.now();
      } catch {
        return true;
      }
    };

    const restoreUser = (user: DB_User) =>{
      setUser(user);
      setCartItems(user.cart.items);
      setIsloggedIn(true);
    };

    const login = (token: string, user: DB_User) => {
      saveToken(token);
      saveUser(user);
      restoreUser(user);
    };

    const logout = () => {
      removeCredentials();
      setUser(null);
      setIsloggedIn(false);
    };
    

    useEffect(() => {
      const verifyToken = async () => {
        const token = getToken();

        if (!token || isTokenExpired(token)) {
          logout();
          setLoadingSecurePage(false);
          return;
        }else {
          const user = getUser();
          if(user) {
            restoreUser(JSON.parse(user) as DB_User);
            setLoadingSecurePage(false);
          }else { logout(); }
        }

      };

      verifyToken();
    }, []);


    const addToCart = async(newItem: Partial<DB_CartItem>) => {
      setAddingToCart(true);
      if(user) {
        try {
          const response: AxiosResponse = await fetchWithRetry(
            {
              method: "POST",
              url: `${HOST}/api/v1/products/add-to-cart`,
              data: newItem,
            }, 3, // retries
            2000 // delay
          );
          // get user from local and update cart
          const user = getUser();
          if(user) {
            const parsedUser: DB_User = JSON.parse(user);
            parsedUser.cart.items = response.data as DB_CartItem[];
            saveUser(parsedUser);
          }
          setCartItems(response.data);
          toast.success("Item added to cart");
        } catch (error: any) {
          toast.error(error?.response?.data?.message || "Network error, please try again");
        } finally {
          setAddingToCart(false);
        };

      }else {
        const cart = JSON.parse(localStorage.getItem("shopper cart") || "[]");
        cart.push(newItem);
        localStorage.setItem("shopper cart", JSON.stringify(cart));
      }

    };

    const removeFromCart = async(data: { cartId: string; itemId: string; })=>{
      if(user) {
        try {
          const response: AxiosResponse = await fetchWithRetry(
            {
              method: "POST",
              url: `${HOST}/api/v1/products/remove-from-cart`,
              data: data,
            }, 3, // retries
            2000 // delay
          );
          // get user from local and update cart
          const user = getUser();
          if(user) {
            const parsedUser: DB_User = JSON.parse(user);
            parsedUser.cart.items = response.data as DB_CartItem[];
            saveUser(parsedUser);
          }
          setCartItems(response.data);
          toast.success("Item removed from cart");
        } catch (error: any) {
          toast.error(error?.response?.data?.message || "Network error, please try again");
        } finally {
          setAddingToCart(false);
        };

      }else {
        const cart: DB_CartItem[] = JSON.parse(localStorage.getItem("shopper cart") || "[]");
        const filterCart = cart.filter((item)=> item.id !== data.itemId);
        localStorage.setItem("shopper cart", JSON.stringify(filterCart));
      }
    };

    const clearCart = ()=>{
      setCartItems([]);
    };

    const increaseQuantity = (cartItem: DB_CartItem)=>{
      setCartItems((prevItems) => {
        const exists = prevItems.find((item) => item.name === cartItem.name);

        if (exists) {
          // increment quantity
          return prevItems.map((item) =>
            item.name === cartItem.name ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        return prevItems;
      });
    };

    const decreaseQuantity = (cartItem: DB_CartItem)=>{
      setCartItems((prevItems) => {
        const exists = prevItems.find((item) => item.name === cartItem.name);

        if (exists) {
          return prevItems.map((item) =>
            item.name === cartItem.name && item.quantity > 1? { ...item, quantity: item.quantity -   1 } : item
          );
        }

        return prevItems;
      });
    };



    return (
      <AppContext.Provider value={{ showMenu, setShowMenu, showCategories, setShowCategories, 
        setShowDropCategories, showDropCategories, cartItems, addToCart, increaseQuantity, decreaseQuantity,
        removeFromCart, clearCart, paymentSuccess, setPaymentSuccess, isloggedIn, setIsloggedIn, user, setUser,
        loadingSecurePage, setLoadingSecurePage, login, logout, restoreUser, nonUserEmail, setNonUserEmail,
        addingToCart
      }}>
        {children}
      </AppContext.Provider>
    );
  };

  // Custom hook for consuming context
  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used inside AppProvider");
    }
    return context;
  };
