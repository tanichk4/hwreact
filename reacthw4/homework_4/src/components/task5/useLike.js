import { useState } from "react";

function useLike(initialLiked) {
  const [liked, setLiked] = useState(initialLiked);

  function toggleLike() {
    setLiked((prevLiked) => !prevLiked);
  }

  return [liked, toggleLike];
}

export default useLike;
