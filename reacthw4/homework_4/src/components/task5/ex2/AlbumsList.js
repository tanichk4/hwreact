import React from "react";
import useFetch from "../useFetch";
import Album from "./Album";
const AlbumsList = () => {
  const {
    loading,
    error,
    data: albums,
  } = useFetch("https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>ALBUMS</h3>
      {albums &&
        albums.map((album) => (
          <Album key={album.id} title={album.title} thumbnailUrl={album.thumbnailUrl} />
        ))}
      <hr />
    </div>
  );
};

export default AlbumsList;
