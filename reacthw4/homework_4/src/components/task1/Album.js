import React, { useState, useEffect } from 'react';
import LikeButton from "./LikeButton";

const Album = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
      const data = await response.json();
      setPhoto(data[0]);
    };
    fetchPhoto();
  }, []);

  if (!photo) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <LikeButton />
      <hr />
    </div>
  );
};

export default Album;

