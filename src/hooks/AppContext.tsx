  import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
  import type { CartItem, DecodedToken } from "../utils/Types";
import { jwtDecode } from "jwt-decode";

  // Define the shape of your context
  interface AppContextType {
    user: DecodedToken | null;
    loadingSecurePage: boolean;
    setLoadingSecurePage: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<DecodedToken | null>>;
    restoreUser: (token: string)=>void;
    isloggedIn: boolean;
    setIsloggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
    showCategories: boolean;
    setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
    showDropCategories: boolean;
    setShowDropCategories: React.Dispatch<React.SetStateAction<boolean>>;
    cartItems: CartItem[];
    addToCart: (item: CartItem)=>void;
    removeFromCart: (item: CartItem)=>void;
    clearCart: ()=>void;
    increaseQuantity: (cartItem: CartItem)=>void;
    decreaseQuantity: (item: CartItem)=>void;
    paymentSuccess: boolean;
    setPaymentSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    login: (token: string) => void;
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
    const [cartItems, setCartItems] = useState<CartItem[]>([]); 
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [user, setUser] = useState<DecodedToken | null>(null);
    const [loadingSecurePage, setLoadingSecurePage] = useState(true);
    const [nonUserEmail, setNonUserEmail] = useState('');


    const saveToken = (token: string) => localStorage.setItem('shopper token', token);
    const removeToken = () => localStorage.removeItem('shopper token');
    const getToken = () => localStorage.getItem('shopper token');

    const isTokenExpired = (token: string) => {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded.exp * 1000 < Date.now();
      } catch {
        return true;
      }
    };

    const restoreUser = (token: string) =>{
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);
      setIsloggedIn(true);
    };

    const login = (token: string) => {
      saveToken(token);
      restoreUser(token);
    };

    const logout = () => {
      removeToken();
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
          restoreUser(token);
          setLoadingSecurePage(false);
        }

      };

      verifyToken();
    }, []);


    const addToCart = (newItem: CartItem) => {
      setCartItems((prevItems) => {
        const exists = prevItems.find((item) => item.name === newItem.name);

        if (exists) {
          // increment quantity
          return prevItems.map((item) =>
            item.name === newItem.name ? { ...item, quantity: item.quantity + newItem.quantity } : item
          );
        }

        // else add new item
        return [...prevItems, newItem];
      });
    };

    const removeFromCart = (item: CartItem)=>{
      setCartItems((prev)=> prev.filter((filterItem)=> filterItem.name !== item.name))
    };

    const clearCart = ()=>{
      setCartItems([]);
    };

    const increaseQuantity = (cartItem: CartItem)=>{
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

    const decreaseQuantity = (cartItem: CartItem)=>{
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
        loadingSecurePage, setLoadingSecurePage, login, logout, restoreUser, nonUserEmail, setNonUserEmail
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
