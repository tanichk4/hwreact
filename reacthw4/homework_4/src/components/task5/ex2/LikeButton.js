import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };
  const Liked = () => {
    return (
      <div>
        <img
          width="25px"
          height="25px"
          src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
          alt="liked"
        />
      </div>
    );
  };

  const NotLiked = () => {
    return (
      <div>
        <img
          width="25px"
          height="25px"
          src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
          alt="liked"
        />
      </div>
    );
  };
  return (
    <button onClick={handleClick}>{liked ? <Liked /> : <NotLiked />}</button>
  );
};

export default LikeButton;
