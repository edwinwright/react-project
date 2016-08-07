import React, { Component } from 'react';
import PhotoList from '../components/PhotoList'

// NOTE: Do I need to import this stuff ??
import es6promise from 'es6-promise';
// import 'isomorphic-fetch';

class PhotoListContainer extends Component {

  constructor () {
    super();
    this.state = {
      photos: []
    };
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
      this.setState({photos : data.slice(0, 50) });
    })
    .catch(console.log);
  }

  render() {
    return (
      <PhotoList {...this.props} photos={this.state.photos} />
    );
  }
}

export default PhotoListContainer
