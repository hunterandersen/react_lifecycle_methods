import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Navbar - Rendered");
    return (
      <nav
        style={{ backgroundColor: "#0094C8", color: "#eee", padding: "1rem" }}
      >
        <span>React Lifecycle Methods</span>
      </nav>
    );
  }
}

export default Navbar;