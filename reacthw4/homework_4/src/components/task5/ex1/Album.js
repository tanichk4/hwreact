import useLike from "../useLike";
import useFetch from "../useFetch";

const Album = () => {
  const [liked, toggleLike] = useLike(false);
  const {
    loading,
    error,
    data: album,
  } = useFetch("https://jsonplaceholder.typicode.com/albums/1/photos");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div>
        <h2>{album[0].title}</h2>
        <img src={album[0].thumbnailUrl} alt={album[0].title} />
      </div>
      <button onClick={toggleLike}>{liked ? "Unlike" : "Like"}</button>
    </>
  );
};

export default Album;
