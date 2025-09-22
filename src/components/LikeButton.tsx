import { Heart } from "lucide-react";
import { useState } from "react";

type LikeButtonProps = {
  initialLiked?: boolean;
  toggle: (liked: boolean) => void;
};

const LikeButton = ({ initialLiked, toggle }:LikeButtonProps) => {
    const [liked, setLiked] = useState(initialLiked);

    const handleLike = ()=>{
        const newState = !liked;
        setLiked(newState);
        toggle(newState);
    };

  return (
    <div className="w-9 h-9 bg-white text-black-text rounded-full grid place-items-center shadow-sm absolute z-10 top-4 right-4
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