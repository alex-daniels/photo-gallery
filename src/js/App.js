import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <section className="app-wrapper">
        <h1>Photo Gallery Project</h1>
        <Router>
          <Route path="/" component={ Layout } />
        </Router>
      </section>
    );
  }
}

export default App;
