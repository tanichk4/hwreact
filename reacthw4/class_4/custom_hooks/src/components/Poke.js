import { useToggle } from "../hooks/useToggle";

export const Poke = ({ name }) => {
  const [isLiked, setLiked] = useToggle();
  return (
    <div className="poke">
      <h3>{name}</h3>
      <button
      className={isLiked ? 'isLiked' : ''}
      onClick={() => setLiked()}
      >
        Like
      </button>
    </div>
  );
};
