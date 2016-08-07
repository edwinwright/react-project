import React from 'react';
import { Link } from 'react-router';

const PhotoThumb = ({ photo }) => (
  <Link to={'/photos/' + photo.id}>
    <img src={photo.thumbnailUrl} />
  </Link>
);

// TODO: Add propTypes

export default PhotoThumb
