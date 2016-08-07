import { expect } from 'chai';
import photos from '../../../src/reducers/photos';

describe('the photos reducer', () => {
  it('when called with the RECEIVE_PHOTOS reducer, returns an object with new photos in it', () => {
    const beforeState = [];
    const newPhotos = ['photo', 'photo2'];
    const expectedState = newPhotos;

    const afterState = photos(beforeState, {type: 'RECEIVE_PHOTOS', photos: newPhotos});
    expect(afterState).to.eql(expectedState);
  });

  it('can handle an undefined action and return the existing state', () => {
    const beforeState = [];

    const afterState = photos(beforeState, {type: 'undefined'});
    expect(afterState).to.eql(beforeState);
  });
});
