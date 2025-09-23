import React, { createContext, useContext, useState, type ReactNode } from "react";

// Define the shape of your context
interface AppContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
  showDropCategories: boolean;
  setShowDropCategories: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: any[];
  addToCart: (item: any)=>void;
  increaseQuantity: (item: any)=>void;
  decreaseQuantity: (item: any)=>void;
}

// Create the context with default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showDropCategories, setShowDropCategories] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]); 

  const addToCart = (newItem: any) => {
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

  const increaseQuantity = (item: any)=>{
    return cartItems.map((cartItem)=> 
      cartItem.name === item.name? {...cartItem, quantity:cartItem.quantity + 1}: cartItem)
  };

  const decreaseQuantity = (item: any)=>{
    return cartItems.map((cartItem)=> 
      cartItem.name === item.name && cartItem.quantity > 1? {...cartItem, quantity:cartItem.quantity - 1}: cartItem)
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
