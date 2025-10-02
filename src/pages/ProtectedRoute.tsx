import { Navigate } from "react-router-dom";
import { useAppContext } from "../hooks/AppContext";
import type { JSX } from "react/jsx-runtime";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { loadingSecurePage, user } = useAppContext();


  if (loadingSecurePage) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-400"></div>
        <p className="ml-3 text-black-text font-monts-medium">Verifying...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
