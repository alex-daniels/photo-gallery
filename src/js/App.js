import React, { Component } from 'react';
import Routes from "./components/Routes/Routes";

import Menu from "./components/Menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Photo Gallery Project</h1>
        <Routes />
        <Menu />
      </div>
    );
  }
}

export default App;
