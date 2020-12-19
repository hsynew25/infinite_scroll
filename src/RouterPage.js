import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Covie19 from "./Covid19";
import Header from "./Header";
import ShowMovieList from "./Movie/ShowMovieList";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Covie19} />
      <Route path="/movieList" exact component={ShowMovieList} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
