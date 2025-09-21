import { useLocation } from "react-router-dom";


const ProductDetailsPage = () => {
    const location = useLocation();
    const item = location.state?.product;
    
  return (
    <div className="w-full h-screen min-h-screen bg-orange-50 flex ">{item}</div>
  )
}

export default ProductDetailsPage;