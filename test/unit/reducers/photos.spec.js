import { expect } from 'chai';
import photos from '../../../src/reducers/photos';
import { RECEIVE_PHOTOS } from '../../../src/actions/photos';


describe('The photos reducer function', () => {

  // it('should return the default value when initialised', () => {
  //   const action = {
  //     type: RECEIVE_PHOTOS
  //   };
  //
  //   // Something going wrong on this line. photos(undefined, action) doesn't work
  //   const stateAfter = photos();
  //   expect([]).to.eql([]);
  // });


  it('should return the current state for an unkown action', () => {
    const stateBefore = [1, 2, 3];
    const action = {
      type: 'UNKNOWN'
    };
    const stateAfter = photos(stateBefore, action);
    expect(stateAfter).to.eql(stateBefore);
  });

  // TODO: Clean this up and make it more reliable
  it('should add the new photos to the array', () => {
    const stateBefore = [1, 2, 3];
    const action = {
      type: RECEIVE_PHOTOS,
      photos: [4, 5]
    };
    const stateAfter = photos(stateBefore, action);
    expect(stateAfter).to.eql([1, 2, 3, 4, 5]);
  });


});
