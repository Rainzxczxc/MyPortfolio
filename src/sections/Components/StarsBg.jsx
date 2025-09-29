import React, { useEffect, useState } from "react";

function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 50; // number of blinking diamonds
    const newStars = Array.from({ length: numStars }).map(() => ({
      id: Math.random(),
      top: Math.random() * 100, // percentage position
      left: Math.random() * 100,
      size: Math.random() * 6 + 2, // random size between 2–8px
      delay: Math.random() * 3, // random animation delay
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white opacity-80 animate-blink rotate-45"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default StarsBackground;
