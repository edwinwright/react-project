
export const fetchPhotos = (endpoint) => {
  return fetch(endpoint, {
    method: 'get'
  });
}
