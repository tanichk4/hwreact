import React from "react";
import withFetchingData from "./withFetchingData";
import Album from "./Album";
const AlbumsList = ({ data: albums, isLoading, error }) => {
  return (
    <div>
      <h3>ALBUMS</h3>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {albums &&
        albums.map((album) => (
          <Album title={album.title} thumbnailUrl={album.thumbnailUrl} />
        ))}
      <hr />
    </div>
  );
};

export default withFetchingData(AlbumsList);
