import { RECEIVE_PHOTOS } from '../actions/photos';

// Look at the state being an array!
const photos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return [...state, ...action.photos]
    default:
      return state
  }
}

export default photos;
