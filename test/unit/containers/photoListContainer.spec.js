// What is container doing that you want to test:
// - getting state from store to pass through as props (by calling fetch and fetch is dispatching data to the store)

// i.e.
// fetch was called
// receive photos was called

// need to mock the api becuase don't want the test to make actual http requsts.
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-addons-test-utils';
import sinon from 'sinon';
import photoListContainer from '../../../src/containers/PhotoListContainer';
import * as api from '../../../src/api/photos';

describe('PhotoListContainer', () => {
  it('gets data from the api on first mounting', () => {

    const PhotoListContainer = mount(<photoListContainer />);

    sinon.stub(api, 'fetchPhotos').returns(new Promise(function () {}));
    sinon.assert.called(api.fetchPhotos);
  });
});
