import React from "react";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PhotoListContainer from "../containers/PhotoListContainer";
import Photo from "../components/Photo";

const Routes = (
  <Route path="/" component={PhotoListContainer}>
    <Route path="photos" component={Photo}>
      <Route path=":id" component={Photo} />
    </Route>
    <IndexRoute component={PhotoListContainer} />
  </Route>
);

export default Routes;
