export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'

export function receivePhotos(photos) {
  return {
    type: RECEIVE_PHOTOS,
    photos
  }
}
