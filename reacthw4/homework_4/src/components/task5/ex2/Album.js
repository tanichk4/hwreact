import LikeButton from "./LikeButton";

const Album = ({ title, thumbnailUrl }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={thumbnailUrl} alt={title} />
      <LikeButton />
    </div>
  );
};

export default Album;
