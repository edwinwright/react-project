import { expect } from 'chai';
import { receivePhotos } from '../../../src/actions/photos';

describe('the RECEIVE_PHOTOS action', () => {

  it('has a type property', () => {
    const action = receivePhotos([]);
    expect(action.type).to.equal('RECEIVE_PHOTOS');
  });

  it('when dispached, it returns photos passed to it in a photos key ', () => {
    const photos = ['photo', 'photo2']
    const action = receivePhotos(photos);
    expect(action.photos).to.equal(photos);
  });
})
