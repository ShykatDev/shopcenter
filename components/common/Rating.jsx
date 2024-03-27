"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Rating = ({ inRating }) => {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    setRating(Array(inRating).fill(0));
  }, [inRating]);

  return (
    <div className="mt-3 flex items-center justify-start gap-1">
      {rating.map((_, i) => {
        return (
          <Image
            key={i}
            src="/svg/star.svg"
            width={20}
            height={20}
            alt="star"
          />
        );
      })}
    </div>
  );
};

export default Rating;
