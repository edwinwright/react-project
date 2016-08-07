import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoList from '../components/PhotoList';
import * as actions from '../actions/photos';
import * as api from '../api/photos';

// NOTE: Do I need to import this stuff ??
// import es6promise from 'es6-promise';
// import 'isomorphic-fetch';

class PhotoListContainer extends Component {

  constructor () {
    super();
  }

  componentDidMount() {
    api.fetchPhotos('http://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        this.props.receivePhotos(data.slice(0, 50))
      })
      .catch(console.log);
  }

  render() {
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
