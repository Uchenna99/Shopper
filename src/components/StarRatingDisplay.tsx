import React from "react";

type StarRatingDisplayProps = {
  rating: number;        // e.g., 4.3
  maxStars?: number;     // default = 5
  size?: number;         // star size in px
};

export const StarRatingDisplay: React.FC<StarRatingDisplayProps> = ({
  rating,
  maxStars = 5,
  size = 20,
}) => {
  return (
    <div className="flex items-center space-x-0">
      {Array.from({ length: maxStars }, (_, i) => {
        const starValue = i + 1;
        const isFull = starValue <= Math.floor(rating);
        const isHalf = rating >= starValue - 0.5 && rating < starValue;

        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            width={size}
            height={size}
            fill={isFull ? "gold" : isHalf ? "url(#halfGradient)" : "gray"}
          >
            <defs>
              <linearGradient id="halfGradient">
                <stop offset="50%" stopColor="gold" />
                <stop offset="50%" stopColor="gray" />
              </linearGradient>
            </defs>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.371-2.449a1 1 0 00-1.175 0l-3.371 2.449c-.785.57-1.84-.197-1.54-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.06 9.382c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.955z" />
          </svg>
        );
      })}
      <span className="text-xs text-black-text font-monts-light ml-1">(57)</span>
    </div>
  );
};
