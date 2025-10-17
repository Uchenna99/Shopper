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
  const isLiked = user?.wishlist.items.some((listItem)=> listItem.productId === id)
  const [liked, setLiked] = useState(!!isLiked);

  const handleLike = async()=>{
    const newState = !liked;
    const payload = {wishlistId: user?.wishlist.id, itemId: id}

    if(newState) {
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
        refreshUser();
      })
    }else {
      await apiRequest<any>('POST', `${HOST}/api/v1/user/remove-from-wishlist`, payload)
      .then((response)=>{
        console.log(response.data)
        toast.success(response.data.message)
      })
      .catch(()=>{
        toast.error('Action failed');
      })
      .finally(()=>{
        setLiked(newState);
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
            className={`transition-all duration-300 ${liked? 'fill-red-400':''}`}
            strokeWidth={liked? 0 : 1}
        />
    </div>
  )
}

export default LikeButton;