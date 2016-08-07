import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoList from '../components/PhotoList';
import * as actions from '../actions/photos';

// NOTE: Do I need to import this stuff ??
// import es6promise from 'es6-promise';
// import 'isomorphic-fetch';

class PhotoListContainer extends Component {

  constructor () {
    super();
  }

  componentDidMount() {
    this.fetchPhotos('http://jsonplaceholder.typicode.com/photos');
  }

  fetchPhotos(endpoint) {
    fetch(endpoint, {
      method: 'get'
    })
    .then(response => response.json()) // What is this response object that's coming back ??
    .then(data => {
      console.log(data.slice(0, 50));
      this.props.receivePhotos(data.slice(0, 50));
    })
    .catch(console.log);
  }

  render() {
    // console.log('props', this.props)
    return (
      <PhotoList {...this.props} photos={this.props.photos} />
    );
  }
}

// Get stuff out of state and put it into props in this container.
function mapStateToProps(state) {
  return { photos: state.photos }
}

// Put functions into props so you can call them
function mapDispatchToProps(dispatch) {
  return { receivePhotos: (photos) => { dispatch(actions.receivePhotos(photos)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoListContainer)
