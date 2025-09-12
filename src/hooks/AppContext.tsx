import React, { createContext, useContext, useState, type ReactNode } from "react";

// Define the shape of your context
interface AppContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showCategories: boolean;
  setShowCategories: React.Dispatch<React.SetStateAction<boolean>>;
  showDropCategories: boolean;
  setShowDropCategories: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with default undefined
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create the provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
   const [showDropCategories, setShowDropCategories] = useState(false);


  return (
    <AppContext.Provider value={{ showMenu, setShowMenu, showCategories, setShowCategories, 
      setShowDropCategories, showDropCategories
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
