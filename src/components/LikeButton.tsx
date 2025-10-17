import { Heart } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../hooks/AppContext";
import { apiRequest } from "../lib/api";
import { HOST } from "../utils/Host";
import { toast } from "sonner";

type LikeButtonProps = {
  id: string;
};

const LikeButton = ({ id }:LikeButtonProps) => {
  const { user, refreshUser } = useAppContext();
  const isLiked = user?.wishlist.items.some((listItem)=> listItem.productId === id);
  const wishlistItem = user?.wishlist.items.find((listItem)=> listItem.productId === id);
  const [liked, setLiked] = useState(!!isLiked);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async()=>{
    const newState = !liked;
    const payload = {wishlistId: user?.wishlist.id, itemId: id}
    const payload2 = {wishlistId: user?.wishlist.id, itemId: wishlistItem?.id}

    if(newState) {
      setIsLoading(true);
      await apiRequest<any>('POST', `${HOST}/api/v1/user/add-to-wishlist`, payload)
      .then((response)=>{
        console.log(response.data)
        toast.success(response.data.message)
      })
      .catch(()=>{
        toast.error('Action failed');
      })
      .finally(()=>{
        setLiked(newState);
        setIsLoading(false);
        refreshUser();
      })
    }else {
      setIsLoading(true);
      await apiRequest<any>('POST', `${HOST}/api/v1/user/remove-from-wishlist`, payload2)
      .then((response)=>{
        console.log(response.data)
        toast.success(response.data.message)
      })
      .catch(()=>{
        toast.error('Action failed');
      })
      .finally(()=>{
        setLiked(newState);
        setIsLoading(false);
        refreshUser();
      })
    }
    
  };

  return (
    <div className="w-9 h-9 bg-white text-black-text rounded-full grid place-items-center shadow-sm absolute z-30 top-4 right-4
        cursor-pointer transition-all duration-300 hover:scale-105 active:scale-105 hover:text-red-400"
        onClick={handleLike}>
        <Heart
            size={18}
            className={`transition-all duration-300 ${isLoading? 'fill-red-200' : liked? 'fill-red-400':''}`}
            strokeWidth={liked? 0 : 1}
        />
    </div>
  )
}

export default LikeButton;