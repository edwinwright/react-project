import React from 'react';
import PhotoThumb from './PhotoThumb';

const PhotoList = ({ photos }) => (
  <div>
    <h1>PhotoList</h1>
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoThumb photo={photo} />
        </li>
      ))}
    </ul>
  </div>
);

// TODO: Add propTypes
// TODO: Does PhotoThumb need {...this.props} ??

export default PhotoList
