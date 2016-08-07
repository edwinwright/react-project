export const fetchPhotos = (endpoint) => {
  return fetch(endpoint, {
    method: 'get'
  })
  .then(response => response.json());
}
