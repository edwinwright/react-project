import React from 'react';

const Photo = ({ photo }) => (
  <div>
    <div>{photo.title}</div>
    <img src={photo.thumbnailUrl} />
  </div>
);

// TODO: Add propTypes

export default Photo

// TODO: This should be a nested route maybe
// but we could get the photo data from the store once we have Redux
