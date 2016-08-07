import React, { Component } from 'react';

// NOTE: Do I need to import this stuff ??
import es6promise from 'es6-promise';
// import 'isomorphic-fetch';

const PhotoList = ({ photos }) => {
  
  const items = photos.map(photo => (
    <li key={photo.id}>{photo.title} <img src={photo.thumbnailUrl} /></li>
  ));

  return (
    <div>
      <h1>PhotoList</h1>
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default PhotoList
