import React, { createContext, useContext, useState, type ReactNode } from "react";
import type { CartItem } from "../utils/Types";

// Define the shape of your context
interface AppContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
  showDropCategories: boolean;
  setShowDropCategories: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  addToCart: (item: CartItem)=>void;
  increaseQuantity: (cartItem: CartItem)=>void;
  decreaseQuantity: (item: CartItem)=>void;
}

// Create the context with default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showDropCategories, setShowDropCategories] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); 

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
      setShowDropCategories, showDropCategories, cartItems, addToCart, increaseQuantity, decreaseQuantity
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
