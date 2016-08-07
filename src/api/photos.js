
const fetchPhotos = (endpoint) => {
  return fetch(endpoint, {
    method: 'get'
  });
}

export default fetchPhotos;
