import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Grid from "../Grid/Grid";
import Photo from "../Photo/Photo";

/* Our routes in use for this project
 * The homepage '/' will be the main Grid type
 * /photo will be a single photo loaded after clicking on the grid
 */
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ Grid }/>
      <Route path="/photo" component={ Photo } />
    </Switch>
  </Router>
);

export default Routes;