
// getting state and setting state
//
// was fetchPhotos called
//
//
// was receive photos called


import { expect } from 'chai';
import sinon from 'sinon';
import PhotoListContainer from '../../../src/containers/PhotoListContainer';
import * as api from '../../../src/api/photos';

console.log(api)

describe('PhotoListContainer component', () => {

  it('should call the api to get photos', () => {
    var fetchPhotos = sinon.stub(api, 'fetchPhotos');
    const wrapper = mount(<PhotoListContainer />);
    // console.log(api.fetchPhotos);
    assert(fetchPhotos.called)

  });

});

//   xit('should navitate to / when clicking the home page link', () => {
//     const router = { push: sinon.spy() };
//     // Hint:
//     // In the app/components/Nav the router is injected using the Nav.contextTypes = {
//     //    router: React.PropTypes.object.isRequired,
//     // };
//     // That's called dependency injection and it makes it easier to test the component now.
//     // The test is broken now, you need to fix it by injecting the CONTEXT
//     // To fix it you  must inject the const router = { push: sinon.spy() }; we just created into the mount(<Nav />) above
//     // Nore hints? check the https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
//     const wrapper = shallow(
//       <Nav />,
//       { context: { router }}
//     );
//     wrapper.find('.home').simulate('click');
//   })
//
//   xit('should navitate to /todos when clicking the todos link', () => {
//     const router = { push: sinon.spy() };
//     // Hint, you need to do 2 things:
//     // 1. Inject the context like you did in the previous exercise
//     // 2. Shallow does not "mount"" the component and so it does not execute lifecycle methods, it doesn't create refs,...
//     const wrapper = mount(
//       <Nav />,
//       { context: { router }}
//     );
//     // don't change next line, you must use .ref() instead of .find()
//     wrapper.ref('todos').simulate('click');
//     sinon.assert.calledWith(router.push, '/todos');
//   })
//
