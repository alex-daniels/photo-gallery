import React from "react";

import Menu from "./Menu/Menu";
import Routes from "./Routes/Routes";

class Layout extends React.Component {
  render() {
    return (
      <main className="photo-gallery">
        <Routes />
        <Menu />
      </main>
    );
  }
}

export default Layout;
